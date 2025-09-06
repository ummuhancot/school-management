import { getIsTokenValid, getIsUserAuthorized } from "@/helpers/auth-helpers";
import { login } from "@/services/auth-service";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => { // bu method dan donecek data userSession i oluşturur.
        const res = await login(credentials);
        const data = await res.json();

        if (!res.ok) return null; //login başarıli ise null dondurur.

        //Server e yani APi den bir şey talep ediliceği zaman burası çalışır yani APİ anahtarı Api den gelen token süresi 2 saat
        const payload = {
          user: { ...data },
          accessToken: data.token,
        };
        delete payload.user.taken;

        return payload;
      },
    }),
  ],
  callbacks: {
    /* middleware de ayarlandığı şekliyle, NextAuth'un kapsama alanına giren sayfalara yapılan isteklerden hemen önce authorize callbacki çalışır.
    Bu callback içinde döndürülen treu veya false ifadesine göre talep edilen sayfa açılır veya açılmaz.

    JWT ihtiyaç duyulunca çalışan fonksiyon. */

    //? middleware.js kısmını daha sade yapmak icin kısıtlamaları buradada alabiliriz.
    /*   
    ?  authorized ({auth,request}){
    ?  return true;
    }, 
    */


    //Uygulamada JWT token a ihtiyac duyulduğunda burası çalışır. jwt token i 1 ay kullanılabilir olabiliyor.
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          user: user.user, // ensure user object is nested => kullanıcı nesnesinin iç içe olduğundan emin olun
          accessToken: user.accessToken,
        };
      }
      return token;
    },


    //Uygulamada session bilgisine ihtiyac duyulduğunda burası calışır.
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
