import { useEffect, useState } from "react";
import { Alert } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

let pushToastFn; // global function reference

export default function ToastProvider({ children }) {
  //
  const [toasts, setToasts] = useState([]);
  //
  useEffect(() => {
    pushToastFn = (status = "info", message) => {
      const id = Date.now() + Math.random();
      setToasts((prev) => {
        const newToasts = [...prev, { id, message, status }];
        if (newToasts.length > 5) {
          newToasts.shift();
        }
        return newToasts;
      });
      //
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    };
  }, []);
  //
  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      {children}
      <div
        style={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 9999,
        }}
      >
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 100, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 100, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Alert
                severity={toast.status}
                variant="filled"
                sx={{ minWidth: "250px", boxShadow: 2 }}
                onClose={() => dismissToast(toast.id)}
              >
                {toast.message}
              </Alert>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function showToast(status = "info", message) {
  if (pushToastFn) {
    pushToastFn(status, message);
  } else {
    console.warn("ToastProvider is not mounted yet!");
  }
}
