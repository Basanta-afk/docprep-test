import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToTopHook = () => {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [router]);

  return null;
};

export default ScrollToTopHook;
