export const LoanFirstItems = (data?: any) => {
  return [
    {
      title: "Loan Amount",
      value: data?.desiredLoanAmount,
    },
    {
      title: "Duration",
      value: data?.desiredDurationInMonth,
    },
    {
      title: "Agent Name",
      value: "",
    },
  ];
};
export const LoanSecondItems = (data?: any) => {
  return [
    {
      title: "Claimed",
      value: new Date(data?.claimedLoan?.claimedDate).toDateString(),
    },
    {
      title: "Negotiating",
      value: "",
    },
  ];
};
