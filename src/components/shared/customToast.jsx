import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

export default function CustomToast({
  open = false,
  onClose,
  status,
  message,
}) {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      autoHideDuration={2000}
      slots={{ transition: Slide }}
    >
      <Alert severity={status} variant="filled" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
