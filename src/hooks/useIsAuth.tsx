import { getToken } from "@/utils/helpers/localStorage";
import { useEffect, useState } from "react";

const useIsAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const token = getToken();
    setToken(token);
  }, []);

  return !!token;
};

export default useIsAuth;
