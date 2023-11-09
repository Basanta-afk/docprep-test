import { PostRequest } from "@/plugins/https";

export const APILoginUser = async (data: any) =>
  PostRequest("/auth/login", data);
