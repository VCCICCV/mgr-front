
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getUsers = async (token: string): Promise<Response> => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("获取用户数据失败");
    }
    return (await response.json()) as Response;
  } catch (error) {
    console.error("获取用户数据错误:", error);
    throw error;
  }
};
