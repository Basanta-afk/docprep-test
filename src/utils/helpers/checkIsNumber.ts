export const validateNumber = (value:string) => {
  const isValidNumber = /^[0-9]*$/.test(value);
  return isValidNumber || "Please enter a valid number";
};
