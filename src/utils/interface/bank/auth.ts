export interface IBankRegisterData {
  bankName: string;
  bankMail: string;
  password: string;
  confirmPassword: string;
}

export interface IBankLoginData {
  bankMail: string;
  password: string;
  rememberMe?:boolean;
}
