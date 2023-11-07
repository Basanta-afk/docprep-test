import { GetRequest } from "@/plugins/https";

export const APIGetSmesListNotVerified = () => GetRequest("/admin/kyc");
export const APIGetSmesList = () => GetRequest("/admin/business");
export const APIGetSmeDetails = ([url, id]: any) => GetRequest(`${url}/${id}`);
