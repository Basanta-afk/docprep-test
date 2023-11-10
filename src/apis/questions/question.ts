import { PostRequest } from "@/plugins/https";

export const APIPostQuestions = async (formData: any) =>
  PostRequest("/questions", formData);
