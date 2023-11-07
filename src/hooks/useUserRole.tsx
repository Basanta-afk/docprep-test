import { ILoginResponseData } from "@/utils/interface/auth";
import { useEffect, useState } from "react";

const useUserRole = () => {
  const [role, setRole] = useState<string | null>(null);
  
  useEffect(() => {
    const userDataString = localStorage.getItem("data");
    const userData: ILoginResponseData = userDataString && JSON.parse(userDataString);
    setRole(userData?.userType);
  }, []);

  return role;
};

export default useUserRole;
