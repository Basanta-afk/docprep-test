import { PostRequest } from "@/plugins/https";

export const APICreateSets = async (examId: any, data: any) =>
  PostRequest(`/exams/${examId}/sets`, data);
