// import { BranchSetPasswordType } from "@/pages/bfi-branch/set-password";
import { IBranchLoginData } from "@/utils/interface/branch/auth";

export const branchAuthDto = {
  login: (data: IBranchLoginData) => {
    return {
      username: data?.branchMail,
      password: data?.password,
      rememberMe: data?.rememberMe || false,
    };
  },
  updatePassword: (data: any, userId: string) => {
    return {
      userId: userId,
      oldPassword: data?.oldPassword,
      newPassword: data?.newPassword,
    };
  },
};
