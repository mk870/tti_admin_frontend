import { toast } from "react-toastify";

export const Toast = ({ message, type }) => {
  if (!["success", "error"].includes(type)) {
    return;
  }

  return toast[type](message, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
