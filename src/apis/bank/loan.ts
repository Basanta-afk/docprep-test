import { GetRequest, PutRequest } from "@/plugins/https";

export const APIGetLoanApplicationBank = ([url, bankId, status]: string[]) =>
  GetRequest(`${url}/${bankId}/${status}`);
export const APIGetLoanDetailsBank = ([url, businessId, loanId]: string[]) =>
  GetRequest(`${url}/${businessId}/${loanId}`);

export const APIUpdateLoanStatus = (data: any) => PutRequest("/bank/loan", data);
