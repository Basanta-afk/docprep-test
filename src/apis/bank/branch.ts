import { GetRequest, PostRequest } from "@/plugins/https";

export const APIAddBranchBfi = (data: any) => PostRequest("/bank/add-branch", data);
export const APIGetBranchList = (url: string) => GetRequest(url);
