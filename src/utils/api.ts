// import { getToken, refreshToken } from "@/lib/auth";

// import { getTokenFromCookie } from "./token";

// export async function authFetch(input: RequestInfo | URL, init?: RequestInit) {
//   const token = getToken();

//   const headers = new Headers(init?.headers);
//   if (token) {
//     headers.set("Authorization", `Bearer ${token}`);
//   }

//   let response = await fetch(input, {
//     ...init,
//     headers,
//   });

//   // 处理 token 过期情况
//   if (response.status === 401 && typeof window !== "undefined") {
//     const newTokens = await refreshToken();
//     if (newTokens) {
//       headers.set("Authorization", `Bearer ${newTokens.token}`);
//       response = await fetch(input, {
//         ...init,
//         headers,
//       });
//     }
//   }

//   return response;
// }
