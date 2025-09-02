import { NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!_next/|api/|favicon.ico|robots.txt|sitemap.xml|assets/|images/|fonts/|.*\\.(?:css|js|map|png|jpg|jpeg|gif|webp|svg|ico|mp4|mp3|txt|xml)$).*)",
  ],
};

export default async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api")) return NextResponse.next();

  const hasAccess = request.cookies.has("token");

  // /login is only for logged-out users
  if (pathname.startsWith("/login")) {
    if (hasAccess) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  // If logged in, allow everything
  if (hasAccess) {
    return NextResponse.next();
  }

  // Not logged in, redirect to login
  console.log("middleware: no access token");
  return NextResponse.redirect(new URL("/login", request.url));
}
