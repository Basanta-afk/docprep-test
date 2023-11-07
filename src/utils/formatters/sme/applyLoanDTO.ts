import { IExistingAmount, ILoan } from "@/utils/interface/business/loan";

export const applyLoanDTO = {
  send: (data: ILoan, isTermsAndCondition: boolean, doesPreviousLoanExist: boolean) => {
    return {
      desiredAmount: data.amount,
      desiredDurationInMonth: data.duration,
      doesPreviousLoanExist: doesPreviousLoanExist,
      isTermsAndConditionAccepted: isTermsAndCondition,
      outstandingAmounts: data.existingLoan?.map((item: IExistingAmount) => {
        return {
          outstandingAmount: item.outstandingAmount,
          bankName: item.bank,
        };
      }),
    };
  },
};
