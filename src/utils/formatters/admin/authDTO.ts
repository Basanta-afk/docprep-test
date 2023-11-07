import { IAdminLoginData } from "@/utils/interface/admin/auth";

export const AdminRegisterDTO = {
    login: (data: IAdminLoginData) => {
        return {
            "username": data.email,
            "password": data.password,
            "rememberMe": data.rememberMe
        }
    }
}

