import { GetRequest } from "@/plugins/https";

export const APIGetAllExamBoards = async () => GetRequest("/exam-boards");
