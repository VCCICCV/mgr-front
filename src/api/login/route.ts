// // app/api/login/route.ts
// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";

// export async function POST(request: Request) {
//   try {
//     const { token } = await request.json();

//     // 设置 Cookie（有效期 7 天）
//     cookies().set("auth_token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       maxAge: 60 * 60 * 24 * 7,
//       path: "/",
//       sameSite: "strict",
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: "登录失败" },
//       { status: 500 }
//     );
//   }
// }
