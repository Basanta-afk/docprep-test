import { IBusinessKycData, IReceivedBusinessData } from "@/utils/interface/business/kyc";
import { IExistingAmount } from "@/utils/interface/business/loan";

export const kycDTO = {
  updateKyc: (
    data: IBusinessKycData,
    doesPreviousLoanExist?: boolean,
    isTermsAndCondition?: boolean
  ) => {
    return {
      businessEmail: data.businessMail.trim(),
      ownerContactNumber: data.contact,
      ownerName: data.ownerName.trim(),
      ownerEmailId: data.ownerEmail.trim(),
      annualTurnOver: parseFloat(data.turnOver) || null,
      registeredYear: parseFloat(data.registeredYear) || null,
      panOrVatNumber: data.panVatNo,
      citizenshipFrontUrl: data.citizenshipFront,
      citizenshipBackUrl: data.citizenshipBack,
      panOrVatCertificateUrl: data.panVatImage,
      isPersonalInformationFilled: data.isPeronalInfoFilled,
      isBusinessInformationFilled: data.isBusinessInfoFilled,
      isDocumentInformationFilled: data.isDocumentInfoFilled,
      photoUrl: data.photo,
      initials: data.titles,
      industry: {
        name: data?.industryType,
      },
      businessType: {
        name: data?.businessType,
      },
      businessAddressDto: [
        {
          id: data.addressId || 0,
          province: data.province || null,
          district: data.district || null,
          city: data.city || null,
          street: data.street || null,
          longitude: parseFloat(data.longitude) || null,
          latitude: parseFloat(data.latitude) || null,
        },
      ],
      desiredAmount: data.amount || null,
      desiredDurationInMonth: data.duration || null,
      doesPreviousLoanExist: doesPreviousLoanExist || false,
      isTermsAndConditionAccepted: isTermsAndCondition || false,
      outstandingAmounts: data.existingLoan?.map((item: IExistingAmount) => {
        return {
          outstandingAmount: item.outstandingAmount || null,
          bankName: item.bank || null,
        };
      }),
    };
  },

  receiveSmeData: (data: IReceivedBusinessData) => {
    return {
      id: data?.id,
      businessName: data?.businessName,
      businessMail: data?.businessEmail,
      businessEntity: "pvt. ltd.",
      businessType: "technology",
      contact: data?.ownerContactNumber,
      ownerEmail: data?.ownerEmailId,
      ownerName: data?.ownerName,
      panVatNo: data?.panOrVatNumber,
      registeredYear: data?.registeredYear,
      titles: data?.userInitials,
      turnOver: data?.annualTurnOver,
      isPeronalInfoFilled: data?.isPersonalInformationFilled,
      isBusinessInfoFilled: data?.isBusinessInformationFilled,
      isDocumentInfoFilled: data?.isDocumentInformationFilled,
      province: data?.businessAddresses[0]?.province,
      addressId: data?.businessAddresses[0]?.id,
      district: data?.businessAddresses[0]?.district,
      city: data?.businessAddresses[0]?.city,
      street: data?.businessAddresses[0]?.street,
      latitude: data?.businessAddresses[0]?.latitude,
      longitude: data?.businessAddresses[0]?.longitude,
      citizenshipBack: data?.citizenshipBackUrl,
      citizenshipFront: data?.citizenshipFrontUrl,
      photo: data?.photoUrl,
      panVatImage: data?.panOrVatCertificateUrl,
    };
  },
};
