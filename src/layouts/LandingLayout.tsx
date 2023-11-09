import CustomBadge from "@/components/common/form/CustomBadge";
import Logo from "@/components/partials/Logo";
import { Header } from "@mantine/core";
import { useRouter } from "next/router";
import FooterPage from "@/components/partials/Footer";
import InstagramLogo from "../assets/images/instagram.png";
import TiktokLogo from "../assets/images/tiktok.png";
import Image from "next/image";

const LandingLayout = ({ children }: { children: React.JSX.Element }) => {
  const router = useRouter();

  return (
    <main>
      <Header height={70} p="md" className="flex items-center justify-between dynamic-x-padding">
        <section className="hover:cursor-pointer" onClick={() => router.push("/")}>
          {/* <Logo height={50} width={200} /> */}
          <Logo height={50} width={200} />
        </section>
      </Header>

      {children}

      <FooterPage />
    </main>
  );
};

export default LandingLayout;
