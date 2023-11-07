import { UserType } from "../enums/userType";
import { ILoginData, ISignUpData } from "../interface/auth";

export const authDTO = {
  signup: (data: ISignUpData,userType:UserType) => {
    return {
      password: data?.password,
      fullName: data?.fullName,
      email: data?.email,
      userType: userType,
      contactNumber: "",
    };
  },
  login: (data: ILoginData) => {
    return {
      username: data?.email,
      password: data?.password,
      rememberMe: data?.rememberMe,
    };
  },
};
