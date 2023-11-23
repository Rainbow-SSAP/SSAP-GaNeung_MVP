import { toast } from "react-toastify";

export const successToast = (text, theme = "colored", time = 3000) => {
  toast.success(text, {
    position: "top-center",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const errorToast = (text, theme = "colored", time = 3000) => {
  toast.error(text, {
    position: "top-center",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
