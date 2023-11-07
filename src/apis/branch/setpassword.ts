import { PutRequest } from "@/plugins/https";

export const APIUpdateBranchPassword = (data: any) => PutRequest("/branch/update-password", data);
