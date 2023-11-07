export const geocodingDTO = {
  getAddresses: (addresses: []) => {
    return addresses?.map((address: any) => {
      return {
        label: address?.display_name,
        value: address?.lat + "|" + address?.lon,
      };
    });
  },
  getAddress: (address: any) => {
    return {
      label: address?.display_name,
      value: address?.lat + "|" + address?.lon,
    };
  },
};
