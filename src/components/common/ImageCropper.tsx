import getCroppedImg from "@/utils/helpers/cropImage";
import { Button, Modal, Slider } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useCallback, useEffect, useState } from "react";
import Cropper from "react-easy-crop";

const ImageCropper = ({ imageSource, setCroppedImage }: any) => {
  const [opened, setOpened] = useState<any>(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [aspect, setAspect] = useState(1 / 1);
  const [orginalImageRatio, setOrginalImageRatio] = useState(1 / 1);
  const largerScreen = useMediaQuery("(min-width: 768px)");

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const showCropedImage = async () => {
    try {
      const finalImage = await getCroppedImg(
        imageSource,
        croppedAreaPixels,
        rotation
      );
      setCroppedImage(finalImage);
      setOpened(false);
      setZoom(1);
      setRotation(0);
      setAspect(4 / 3);
    } catch (error) {
      console.log(error);
    }
  };

  const onImageLoad = (image: any) => {
    setAspect(image?.naturalWidth / image?.naturalHeight);
    setOrginalImageRatio(image?.naturalWidth / image?.naturalHeight);
  };

  useEffect(() => {
    if (imageSource) {
      setOpened(true);
    }
  }, [imageSource]);

  return (
    <Modal
      opened={opened}
      size={largerScreen ? "lg" : "sm"}
      sx={{ paddingLeft: "2px", paddingRight: "2px" }}
      onClose={() => setOpened(false)}
      title="Crop image"
      centered
    >
      <div className="relative h-[400px] bg-red-900">
        <Cropper
          image={imageSource}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          aspect={aspect}
          cropShape={"rect"}
          style={{ mediaStyle: { objectFit: "contain" } }}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          onMediaLoaded={onImageLoad}
        />
      </div>
      <div className="h-[200px] flex flex-col justify-end  gap-5 md:px-10  ">
        <Slider
          value={zoom}
          onChange={setZoom}
          label="Zoom"
          min={1}
          max={5}
          step={0.1}
          color="blue"
        />
        <Slider
          value={rotation}
          onChange={setRotation}
          label="Rotation"
          min={0}
          max={180}
          color="yellow"
        />
        <div className="flex gap-5 justify-center">
          <Button
            variant="outline"
            onClick={() => setAspect(orginalImageRatio)}
          >
            orginal
          </Button>
          <Button variant="outline" onClick={() => setAspect(3 / 2)}>
            3/2
          </Button>
          <Button variant="outline" onClick={() => setAspect(6 / 5)}>
            6/5
          </Button>
          <Button variant="outline" onClick={() => setAspect(16 / 9)}>
            16/9
          </Button>
        </div>
        <Button onClick={showCropedImage} variant="gradient">
          Crop
        </Button>
      </div>
    </Modal>
  );
};

export default ImageCropper;
