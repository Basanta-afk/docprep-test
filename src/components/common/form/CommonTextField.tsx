import {
  PasswordInput,
  PasswordInputProps,
  TextInput,
  TextInputProps,
  Textarea,
  TextareaProps,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

const CommonTextField = React.forwardRef(
  (props: TextInputProps & PasswordInputProps & TextareaProps, ref: any) => {
    const [visible, { toggle }] = useDisclosure(false);
    const inputStyles = {
      backgroundColor: "#FAF8F0",
      fontSize: "16px",
    };

    const errorStyles = {
      fontSize: "14px",
      color: "red",
    };

    switch (props.type) {
      case "number":
        return (
          <TextInput
            {...props}
            type="number"
            ref={ref}
            inputMode="numeric"
            variant="filled"
            size="xl"
            styles={{ input: inputStyles, error: errorStyles }}
          />
        );

      case "password":
        return (
          <PasswordInput
            {...props}
            type={visible ? "text" : "password"}
            ref={ref}
            visible={visible}
            onVisibilityChange={toggle}
            variant="filled"
            size="xl"
            styles={{ innerInput: inputStyles, input: inputStyles, error: errorStyles }}
          />
        );
      case "email":
        return (
          <TextInput
            {...props}
            type="email"
            ref={ref}
            inputMode="email"
            variant="filled"
            size="xl"
            styles={{ input: inputStyles, error: errorStyles }}
          />
        );
      case "textarea":
        return (
          <Textarea
            {...props}
            ref={ref}
            variant="filled"
            inputMode="text"
            minRows={5}
            styles={{ input: inputStyles, error: errorStyles }}
          />
        );
      default:
        return (
          <TextInput
            {...props}
            type="text"
            ref={ref}
            inputMode="text"
            variant="filled"
            size="xl"
            styles={{ input: inputStyles, error: errorStyles }}
          />
        );
    }
  }
);

CommonTextField.displayName = "CommonTextField";

export default CommonTextField;
