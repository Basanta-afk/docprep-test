import { GetRequest, PutRequest } from "@/plugins/https";

export const APIGetAllBfiList = ([url, page, size]: string[]) =>
  GetRequest(`${url}?page=${page}&size=${size}`);
export const APIBfiApproval = (data: any) => PutRequest("/admin/verify/bfi", data);
