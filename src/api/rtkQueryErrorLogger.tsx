import { isRejectedWithValue, Middleware } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const error = action.error;
    if (error && error.data && error.data.messages) {
      const errorMessage = error.data.messages || "Unknown error";
      toast.error(errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    } else {
      // Handle jika 'messages' tidak ada dalam respons API
      toast.error("Terjadi Kesalahan, Pastikan internet tersedia 😁", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    }
  }

  return next(action);
};
