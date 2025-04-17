// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/admin", "/dashboard"];

export function middleware(request: NextRequest) {
  // 关键安全修复：阻止中间件子请求绕过认证[5](@ref)
  if (request.headers.has("x-middleware-subrequest")) {
    return new Response("非法请求", { status: 403 });
  }

  const token = request.cookies.get("auth_token")?.value;
  const isProtected = protectedRoutes.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtected && !token) {
    const loginUrl = new URL("/auth/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
