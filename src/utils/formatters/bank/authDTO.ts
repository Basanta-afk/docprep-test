import { IBankLoginData, IBankRegisterData } from "@/utils/interface/bank/auth";
import { UserType } from "@/utils/enums/userType";

export const BankRegisterDTO = {
  register: (data: IBankRegisterData) => {
    return {
      password: data?.password,
      fullName: data?.bankName,
      email: data?.bankMail,
      userType: UserType.BANK,
      contactNumber: null,
    };
  },

  login: (data: IBankLoginData) => {
    return {
      username: data.bankMail,
      password: data.password,
      rememberMe: data.rememberMe,
    };
  },
};
