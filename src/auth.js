import { getIsTokenValid, getIsUserAuthorized } from "@/helpers/auth-helpers";
import { login } from "@/services/auth-service";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => { // bu method dan donecek data userSession i oluşturur.
        const res = await login(credentials);
        const data = await res.json();

        if (!res.ok) return null; //login başarıli ise null dondurur.

        const payload = {
          user: { ...data },
          accessToken: data.token,
        };

        return payload;
      },
    }),
  ],
  callbacks: {
    /* middleware de ayarlandığı şekliyle, NextAuth'un kapsama alanına giren sayfalara yapılan isteklerden hemen önce authorize callbacki çalışır.
    Bu callback içinde döndürülen treu veya false ifadesine göre talep edilen sayfa açılır veya açılmaz.

    JWT ihtiyaç duyulunca çalışan fonksiyon. */
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          user: user.user, // ensure user object is nested
          accessToken: user.accessToken,
        };
      }
      return token;
    },

    async session({ session, token }) {
      const { accessToken, user } = token;

      const isTokenValid = getIsTokenValid(accessToken);
      if (!isTokenValid) return null;

      session.user = user;
      session.accessToken = accessToken;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
  trustHost: true,
});
