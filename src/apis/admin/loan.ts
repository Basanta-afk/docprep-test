import { GetRequest, PutRequest } from "@/plugins/https";

export const APIGetLoanListByStatus = ([url, status]: string[]) =>
  GetRequest(`${url}/${status}?page=0&size=10`);
export const APIGetSmesLoanDetails = ([url, businessId, loanId]: any[]) =>
  GetRequest(`${url}/${businessId}/${loanId}`);

export const APIAdminLoanApproval = (data: any) => PutRequest("/admin/loan/update", data);
