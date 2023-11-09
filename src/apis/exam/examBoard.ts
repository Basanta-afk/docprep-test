import { GetRequest, PostRequest } from "@/plugins/https";

export const APIGetAllExamBoards = async () => GetRequest("/exam-boards");
export const APIAddExamBoard = async (data: any) =>
  PostRequest("/exam-boards", data);

export const APIGetRelatedExams = async (id: any) =>
  GetRequest(`/exam-boards/${id}/exam`);
export const APIGetRelatedSubjects = async () => GetRequest(`/subjects`);

// exam
export const APIAddExam = async (id: any, data: any) =>
  PostRequest(`/exam-boards/${id}/exam`, data);

//   subject
export const APIAddSubject = async (data: any) =>
  PostRequest(`/subjects`, data);

//   chapters
export const APIAddChapters = async (id: any, data: any) =>
  PostRequest(`/subjects/${id}/chapters`, data);
