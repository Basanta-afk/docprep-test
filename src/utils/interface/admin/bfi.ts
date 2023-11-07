export interface IBfiAdmin {
  id: number;
  bfiName: string;
  email: string;
  contactPersonName: string;
  contactPersonPhoneNumber: string;
  bankLogoUrl: string;
  complianceDocumentUrl: string;
  termOfService: boolean | null;
  privacyPolicy: boolean | null;
  industry: string | null;
  bfiStatus: "NEW" | "APPROVED" | "REJECTED";
  branchCount:string | number;
  approvedCount: string | number;
  rejectedCount: string | number;
}
