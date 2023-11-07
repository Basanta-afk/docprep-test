import { GetRequest } from "@/plugins/https";

export const APIGetIndustry = async () => GetRequest("/industry");
