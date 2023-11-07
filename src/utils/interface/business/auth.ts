export interface IBusinessRegisterData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IBusinessLoginData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface IBusinessUserData {
  fullName: "";
  token: "";
  refreshToken: "";
  photoUrl: "";
}
