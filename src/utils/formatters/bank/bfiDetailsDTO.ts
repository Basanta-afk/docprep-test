import { IBFIDetails } from "@/utils/interface/bank/bfiDetails";

export const BankBFIDetailsDTO = {
  send: (data: IBFIDetails) => {
    return {
      bfiName: data?.bfiName,
      email: data?.email,
      contactPersonName: data?.contactPerson,
      contactPersonPhoneNumber: data?.contactNumber,
      bankLogoUrl: data?.logo,
      complianceDocumentUrl: data?.complianceDocument,
      termOfService: data?.termOfServices,
      privacyPolicy: data?.privacyPolicy,
      industry: {
        name: data?.industryType,
      },
      bankAddress: {
        province: "province name",
        district: "district name",
        city: "kathmandu",
        street: data?.headOfficeLocation,
        longitude: 0,
        latitude: 0,
      },
    };
  },
};
