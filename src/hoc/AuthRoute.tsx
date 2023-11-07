import { getToken } from "@/utils/helpers/localStorage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type AuthRouteProps = {
  children: React.ReactNode;
  redirect: string;
};

const AuthRoute = ({ children, redirect }: AuthRouteProps) => {
  const [token, setToken] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (token) {
      setToken(token);
    } else {
      router.push(redirect);
    }
  }, []);

  if (!token) {
    return null;
  }

  return children;
};

export default AuthRoute;
