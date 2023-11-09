import { GetRequest } from "@/plugins/https";

export const APIGetAllSubjects = async () => GetRequest("/subjects");
