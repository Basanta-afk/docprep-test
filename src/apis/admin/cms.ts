import { IIndustryData } from "@/components/common/admin/IndustryTab";
import { GetRequest, PostRequest } from "@/plugins/https";
import { IDocument } from "@/utils/interface/admin/cms";

//document resources
export const APIAddDocument = (data: IDocument) => PostRequest("/admin/document/add", data);
export const APIGetDocuments = () => GetRequest("/document");

//industry resources
export const APIAddIndustryResource = (data: IIndustryData) =>
  PostRequest("/admin/industry/add", data);
export const APIGetIndustryTypes = () => GetRequest("/industry");

//business resources
export const APIAddBusinessResource = (data: any) => PostRequest("/admin/business-type/add", data);
export const APIGetBusinessTypes = () => GetRequest("/business-type");
