import { IReceivedBusinessData } from "../interface/business/kyc";

export const DocumentRequired = (data: IReceivedBusinessData) => [
  {
    title: "Profile Picture",
    status: data?.photoUrl ? true : false,
  },
  {
    title: "Citizenship",
    status: data?.citizenshipBackUrl && data.citizenshipFrontUrl ? true : false,
  },
  {
    title: "Registration Document",
    status: data?.panOrVatCertificateUrl ? true : false,
  },
];

export const DocumentListItems = (data: IReceivedBusinessData) => [
  {
    type: "Citizenship Front",
    doc:
      data.citizenshipFrontUrl ||
      "https://www.investopaper.com/wp-content/uploads/2021/11/pan-vat-tax.jpg",
  },
  {
    type: "Citizenship Back",
    doc:
      data.citizenshipBackUrl ||
      "https://www.investopaper.com/wp-content/uploads/2021/11/pan-vat-tax.jpg",
  },
  {
    type: "Pan/Vat Doc",
    doc:
      data.panOrVatCertificateUrl ||
      "https://www.investopaper.com/wp-content/uploads/2021/11/pan-vat-tax.jpg",
  },
];
