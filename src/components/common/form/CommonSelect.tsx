import { Select, SelectProps } from "@mantine/core";

const CommonSelect = (props: SelectProps) => {
  const inputStyles = {
    backgroundColor: "#FAF8F0",
    fontSize: "16px",
  };
  return <Select {...props} size="xl" variant="filled" styles={{ input: inputStyles }} />;
};

export default CommonSelect;
