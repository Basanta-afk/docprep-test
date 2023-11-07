import { IAddBranchData } from "@/utils/interface/bank/addBranch";

export const branchDTO = {
  addBranch: (data: IAddBranchData, bankId: string | string[]) => {
    return {
      id: null,
      bankName: data?.branchName,
      bankBranchCode: data?.branchCode,
      email: data?.managerMail,
      contactPersonName: data?.branchManager,
      contactPersonPhoneNumber: data?.managerContact,
      branchOfficeAddress: {
        province: data?.province,
        district: data?.district,
        city: data?.city,
        street: data?.street,
        longitude: data?.latitude,
        latitude: data?.longitude,
      },
      bankId: bankId,
    };
  },
};
