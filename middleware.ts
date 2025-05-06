// 请求达到页面或api路由前运行
import { NextResponse } from "next/server";

export async function middleware(request: Request) {
  return NextResponse.next();
}
