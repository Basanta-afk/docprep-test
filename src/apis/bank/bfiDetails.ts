import {PostRequest} from "@/plugins/https";

export const APIPostBFIDetails = async (uid:string,data:any) => PostRequest(`/bank/bfi/${uid}`,data);
