import toast from "react-hot-toast";

export const toastErrorDisplay = (error) => {
  if (error?.errorDetail?.length > 0) {
    toast.error(error.errorDetail[0].message);
  } else if (error.errorTitle) {
    toast.error(error.errorTitle);
  }
};
