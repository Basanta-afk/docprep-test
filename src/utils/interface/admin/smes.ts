export interface ISmesNotVerified {
  id: number;
  businessName: string;
  businessEmail: string;
  ownerContactNumber: string;
  ownerName: string;
  ownerEmailId: string;
  annualTurnOver: number;
  registeredYear: string;
  panOrVatNumber: string;
  isBusinessVerified: boolean | null;
  userInitials: string;
}

export interface ISmesAdmin {
  id: number;
  businessType:string;
  latitude: number;
  longitude: number;
  businessName: string;
  businessIndustry: string;
  loanApplied: number;
}
