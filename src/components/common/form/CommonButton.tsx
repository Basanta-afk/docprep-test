import { Button, ButtonProps } from "@mantine/core";

const CommonButton = (props: ButtonProps & any) => {
  return (
    <Button size="lg" fullWidth variant="filled" {...props} className="bg- hover:bg-secondary">
      {props.children}
    </Button>
  );
};

export default CommonButton;
