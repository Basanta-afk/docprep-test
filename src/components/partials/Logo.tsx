import Image from "next/image";
import ekarjaLogo from "../../assets/images/logo/Logo.svg"

const Logo = ({ height, width }: any) => {
  return <Image src={ekarjaLogo} alt="ekarja" height={height} width={width} className="" />;
};

export default Logo;
