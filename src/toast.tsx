import React from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast: React.FC = () => {
  return (
    <div>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export const showSuccess = (message: string, options?: ToastOptions) => {
  toast.success(message, options);
};

export const showError = (message: string, options?: ToastOptions) => {
  toast.error(message, options);
};

export default Toast;
