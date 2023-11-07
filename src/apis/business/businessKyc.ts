import { GetRequest, PutRequest } from "@/plugins/https";

export const APIUpdateKyc = (data: any) => PutRequest("/business/update-kyc", data);
export const APIIsBusinessEligibleForLoanApply = ([url, userId]: string[]) =>
  GetRequest(`${url}/${userId}`);
