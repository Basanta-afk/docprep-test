import { GetRequest } from "@/plugins/https";

export const APIGetAllChapters = async (subjectId: any) =>
  GetRequest(`/subjects/${subjectId}/chapters`);
