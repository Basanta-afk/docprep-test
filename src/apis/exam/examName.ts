import { GetRequest } from "@/plugins/https";

export const APIGetAllExamName = async (examBoardId: any) =>
  GetRequest(`/exam-boards/${examBoardId}/exam`);
