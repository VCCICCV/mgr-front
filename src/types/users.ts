export interface User {
  id: string;
  domain: string;
  username: string;
  nickName: string;
  avatar: string;
  email: string;
  phoneNumber: string;
  status: "Enabled" | "Disabled";
  createdAt: string;
  createdBy: string;
  updatedAt: string | null;
  updatedBy: string | null;
}

export interface ApiResponse {
  code: number;
  message: string;
  data: User[];
}
