import imageCompression from "browser-image-compression";

export async function handleImageCompression(imageFile: any) {
  const options = {
    maxSizeMB: 0.2,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    maxIteration: 15,
  };
  try {
    const compressedFile = await imageCompression(imageFile, options);
    return compressedFile;
  } catch (error) {
    console.log(error);
  }
}
