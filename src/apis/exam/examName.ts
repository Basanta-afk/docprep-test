import { GetRequest } from "@/plugins/https";

export const APIGetAllExamName = async () => GetRequest("/exams");
