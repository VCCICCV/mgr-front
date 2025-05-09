// 请求达到页面或api路由前运行
// middleware.ts
import { getServerToken } from "@/utils/token_server";
import { type NextRequest, NextResponse } from "next/server";


export async function middleware(request: NextRequest) {
  const token = await getServerToken(); // 添加await
  const { pathname } = request.nextUrl;

  const protectedRoutes = ["/dashboard", "/profile"];
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL("/auth/sign-in", request.url));
    }
  }

  return NextResponse.next();
}
