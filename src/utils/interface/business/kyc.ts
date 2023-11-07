import { ILoan } from "./loan";

export interface IBusinessKycData extends ILoan {
  titles: string;
  ownerName: string;
  businessMail: string;
  contact: string;
  ownerEmail: string;
  isPeronalInfoFilled: boolean;
  isBusinessInfoFilled: boolean;
  isDocumentInfoFilled: boolean;
  businessName: string;
  industryType: string;
  businessType: string;
  addressId: string;
  turnOver: string;
  registeredYear: string;
  panVatNo: string;
  address: string;
  province: string;
  district: string;
  city: string;
  street: string;
  longitude: string;
  latitude: string;
  citizenshipFront?: string;
  citizenshipBack?: string;
  panVatImage?: string;
  photo?: string;
}

export interface IReceivedBusinessData {
  id: number;
  businessName: string;
  businessEmail: string;
  ownerContactNumber: string;
  ownerName: string;
  ownerEmailId: string;
  annualTurnOver: number;
  registeredYear: number;
  panOrVatNumber: number;
  citizenshipFrontUrl: string;
  citizenshipBackUrl: string;
  panOrVatCertificateUrl: string;
  photoUrl: string;
  isBusinessVerified: boolean | null;
  isPersonalInformationFilled: boolean;
  isBusinessInformationFilled: boolean;
  isDocumentInformationFilled: boolean;
  isBusinessEligibleForLoanApply: boolean;
  userInitials: string;
  rejectionReason: string | null;
  businessAddresses: [
    {
      id: number;
      province: string | null;
      district: string;
      city: string;
      street: number;
      longitude: number;
      latitude: number;
    }
  ];
}
