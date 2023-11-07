export const geocoding = async (
  address: string,
  setPostion?: (position: { lat: number; lng: number }) => void
) => {
  try {
    const url = `https://nominatim.openstreetmap.org/search`;
    const params = new URLSearchParams({
      q: address,
      format: "json",
    });

    const response = await fetch(url + "?" + params);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const reverseGeocoding = async (position: { lat: number; lng: number }) => {
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${position.lat}&lon=${position.lng}&format=jsonv2`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
