import Image from "next/image";
import ImageCropper from "../ImageCropper";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { Group, Modal, Text, useMantineTheme } from "@mantine/core";
import { UploadCloud, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { handleImageCompression } from "@/utils/helpers/imageCompression";
import { fileType } from "@/utils/constants/fileType";
import { KycFormProps } from "@/components/containers/business/BusinessKycForm";
import { IBusinessKycData } from "@/utils/interface/business/kyc";
import { useTranslation } from "react-i18next";
import { ILoginResponseData } from "@/utils/interface/auth";

type ImageUploadProps = Omit<KycFormProps, "handleStepChange" | "currentStep" | "rules"> & {
  rules?: {};
  value: keyof IBusinessKycData;
  placeholder: string;
  handleLoading: (value: boolean) => void;
  uploadedFileType?: any;
};

const ImageUpload = ({
  control,
  rules,
  value,
  setValue,
  getValues,
  errors,
  height,
  placeholder,
  handleLoading,
  uploadedFileType = fileType.legalDoc,
}: any) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [imageSource, setImageSource] = useState<any>();
  const [croppedImage, setCroppedImage] = useState<string | Blob>("");
  const { t } = useTranslation();

  const uploadImage = async () => {
    const file: any = await handleImageCompression(croppedImage);
    const userDataString = localStorage.getItem("data");
    const userData: ILoginResponseData = userDataString && JSON.parse(userDataString);
    const userId = userData?.id;
    let formData = new FormData();
    if (userId) {
      formData.append("appId", "OtoRkq4PWZNJyVf");
      formData.append("fileType", uploadedFileType);
      formData.append("userId", userId);
      formData.append("image", file);
    }
    setInvalid(false);

    fetch("https://image.ktmbees.com/storeImage", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        const respJson = res.json();
        return respJson;
      })
      .then((res) => {
        setValue(value, res?.Location);
        setImage(res?.Location);
        setIsLoading(false);
        handleLoading(false);
      })
      .catch(() => {
        // TODO: Update ui and states with error....
      });
  };

  useEffect(() => {
    if (croppedImage) {
      uploadImage();
      handleLoading(true);
      setIsLoading(true);
    }
  }, [croppedImage]);

  return (
    <>
      <div>
        <Controller
          name={value}
          control={control}
          rules={rules}
          render={() => (
            <Dropzone
              loading={isLoading}
              onDrop={(files) => {
                setImageSource(URL.createObjectURL(files[0]));
              }}
              onReject={() => setInvalid(true)}
              // maxSize={1 * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}
              styles={{ root: { backgroundColor: "#faf8f0" } }}
            >
              <Group
                position="center"
                spacing="xl"
                style={{ minHeight: height || 220, pointerEvents: "none" }}
              >
                <Dropzone.Accept>
                  <UploadCloud
                    size={50}
                    color={theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6]}
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <UploadCloud
                    size={50}
                    color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]}
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="p-2">
                      <UploadCloud size={50} color="#6E7191" />
                    </div>
                    <Text className="text-2xl text-placeholder">{placeholder}</Text>
                    <Text size="lg" inline className="text-placeholder text-center leading-5">
                      {t("image-upload-placeholder")}
                    </Text>
                  </div>
                </Dropzone.Idle>
              </Group>
            </Dropzone>
          )}
        />
        {imageSource && (
          <ImageCropper imageSource={imageSource} setCroppedImage={setCroppedImage} />
        )}
      </div>
      {!image && !errors && <div className="text-red-500 pt-2">Image is required *</div>}
      {!!invalid && <div className="text-primary pt-2">Invalid image format !!</div>}

      {getValues(value) && (
        <div
          className="py-4 relative"
          style={{
            height: "120px",
            width: "120px",
          }}
        >
          <div className="flex flex-col items-center absolute top-10 left-10 ">
            <div>
              <Eye size={40} />
            </div>
          </div>

          <Image
            src={getValues(value)}
            alt={"uploaded image"}
            loading={"lazy"}
            height={"500"}
            width={"500"}
            onClick={() => setOpened(!opened)}
            className="cursor-pointer hover:opacity-70 object-cover  hover:transition hover:ease-in "
          />
        </div>
      )}
      {getValues(value) && (
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          centered
          size="lg"
          title="Image preview"
        >
          <div className="h-[500px] w-full flex items-center justify-center">
            <Image
              src={getValues(value)}
              alt="uploaded image"
              height="1024"
              width="1024"
              className="object-cover"
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default ImageUpload;
