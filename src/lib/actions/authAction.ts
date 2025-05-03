// import { login as apiLogin, register as apiRegister } from "../../bake_api";
// import useUserStore from "../../stores/userStore";
// import { LoginRequest } from "../types/auth";

// export const login = async (data: LoginRequest) => {
//   try {
//     const response = await apiLogin(data);
//     if (response.success) {
//       const { login: setUser } = useUserStore.getState();
//       setUser(response.data);
//     }
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };

// export const register = async (data: LoginRequest) => {
//   try {
//     const user = await apiRegister(data);
//     const { login: setUser } = useUserStore.getState();
//     setUser(user.data);
//     return user;
//   } catch (error) {
//     throw error;
//   }
// };
export const signUp = async () => {};
export const signOn = async () => {};
export const signIn = async () => {};
