export { auth as middleware } from "@/auth";
//? kısıtlamaları auth.js de tanımladım
/* import { getIsTokenValid, getIsUserAuthorized } from "@/helpers/auth-helpers";
import { NextResponse } from "next/server";

import { auth } from "@/auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export default auth(async (request) => {
  const { pathname, origin } = request.nextUrl;

  const session = await auth();
  const userRole = session?.user?.role;
  const isInLoginPage = pathname.startsWith("/login");
  const isInDashboardPage = pathname.startsWith("/dashboard");
  const isLoggedIn = getIsTokenValid(session?.accessToken);

  if (isLoggedIn) {
    if (isInLoginPage) {
      // logged in user going to /login → redirect to dashboard => oturum açmış kullanıcı /login adresine gidiyor → panoya yönlendiriliyor
      return NextResponse.redirect(new URL("/dashboard", origin));
    }

    if (isInDashboardPage) {
      const isUserAuthorized = getIsUserAuthorized(userRole, pathname);
      if (!isUserAuthorized) {
        // logged in but not authorized → redirect => giriş yapıldı ancak yetkilendirilmedi → yönlendirme
        return NextResponse.redirect(new URL("/unauthorized", origin));
      }
    }

    // logged in and allowed → continue => giriş yapıldı ve izin verildi → devam et
    return NextResponse.next();
  }

  // not logged in but trying to access dashboard → block => oturum açılmadı ancak panoya erişmeye çalışılıyor → blok
  if (isInDashboardPage) {
    return NextResponse.redirect(new URL("/login", origin));
  }

  // otherwise allow => aksi halde izin ver
  return NextResponse.next();
});
 */
