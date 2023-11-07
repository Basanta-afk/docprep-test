import { notifications } from "@mantine/notifications";

const notify = (condition: "success" | "error" | "warning" | "notify", message: string) => {
  notifications.show({
    autoClose: 5000,
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

export default notify;
