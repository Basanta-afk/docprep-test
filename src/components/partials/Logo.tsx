import Image from "next/image";
import docPrepLogo from "../../assets/images/logo/DocPrep.svg";

const Logo = ({ height, width }: any) => {
  return <Image src={docPrepLogo} alt="ekarja" height={height} width={width} />;
};

export default Logo;
