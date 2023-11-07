export interface ILoan {
  amount: string;
  duration: string;
  existingLoan: IExistingAmount[];
}

export interface IExistingAmount {
  outstandingAmount?: string;
  bank?: string;
}
