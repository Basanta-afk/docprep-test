import { showNotification } from "@mantine/notifications";

const showNotify = (condition: string, message: string) => {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  showNotification({
    // id: 'hello-there',
    // disallowClose: true,
    // onClose: () => console.log('unmounted'),
    // onOpen: () => console.log('mounted'),
    autoClose: 5000,
    // title: "You've been compromised",
    message,
    color: `${
      condition === "success"
        ? "green"
        : condition === "error"
        ? "red"
        : condition === "warning"
        ? "yellow"
        : condition === "notify"
        ? "blue"
        : ""
    }`,
    style: {
      backgroundColor: "whitesmoke",
      height: "60px",
      color: "white",
    },
    loading: false,
  });
};

export default showNotify;
// Most used notification props
