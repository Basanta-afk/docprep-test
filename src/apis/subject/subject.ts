import { GetRequest } from "@/plugins/https";

export const APIGetAllSubjects = async () => GetRequest("/subjects");
export const APIGetRelatedChapters = async (id: any) =>
  GetRequest(`subjects/${id}/chapters`);
