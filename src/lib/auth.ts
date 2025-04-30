// import { SignupFormSchema, FormState } from "@/app/lib/definitions";

// export async function signup(state: FormState, formData: FormData) {
//   // 验证字段
//   const validatedFields = SignupFormSchema.safeParse({
//     name: formData.get("name"),
//     email: formData.get("email"),
//     password: formData.get("password"),
//   });

//   // 无效返回
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//     };
//   }

//   // 调用
// }
