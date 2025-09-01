export default async function middleware(request) {
  const cookie = request.cookies.get("token");
  console.log(cookie);
  if (!cookie) {
    return Response.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/activity/:path*"],
};
