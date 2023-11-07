import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

const MantineTheme = (props: any) => {
  return (
    <MantineProvider>
      <Notifications />
      {props.children}
    </MantineProvider>
  );
};

export default MantineTheme;
