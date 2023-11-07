import { useTranslation } from "react-i18next";

const CommonHeadingKycForm = ({ subHeading }: { subHeading: string }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full pb-10 flex justify-center items-center gap-3 flex-col">
      <h1 className="font-medium text-title-active text-2xl sm:text-4xl">{t("KYC")}</h1>
      <span className="text-placeholder text-lg sm:text-xl">{subHeading}</span>
    </div>
  );
};

export default CommonHeadingKycForm;
