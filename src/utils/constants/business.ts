export const BusinessConstants = (data?: any) => {
  return [
    {
      title: "SME Type",
      value: data?.businessType,
    },
    {
      title: "Industry",
      value: data?.businessIndustry,
    },
    {
      title: "Pan/Vat No.",
      value: data?.panVatNumber,
    },
    {
      title: "Annual Turn Over",
      value: data?.annualTurnOver,
    },
  ];
};
