import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { customIcons, getIcon } from "../../helpers/iconsHelper";
import LoginCredentialsForm from "../../components/login/loginCredentialsForm";
import OtpAuthenticationForm from "../../components/login/otpAuthenticationForm";
import ResetPasswordForm from "../../components/login/resetPasswordForm";
import { useSelector } from "react-redux";
import {
  selectIsLoginLoading,
  selectLoginCurrentFormID,
  // selectLoginToast,
} from "./loginSlice";
//
export default function LoginPage() {
  //
  const currentFormID = useSelector(selectLoginCurrentFormID);
  const isLoading = useSelector(selectIsLoginLoading);
  //
  return (
    <div className="w-screen h-screen flex md:flex-row flex-col gap-3 p-3 bg-zinc-100 overflow-auto">
      {/* BLACK SIDE */}
      <div className="w-full md:w-1/2 h-full flex justify-center items-center p-30 rounded-[20px] bg-[#1F2937]">
        <img src={getIcon(customIcons.montkaLogo)} />
      </div>
      {/* ==BLACK SIDE == */}
      {/* WHITE SIDE */}
      <div className="w-full md:w-1/2 h-full flex justify-center items-center">
        <LoginCredentialsForm
          className={`${currentFormID == 1 ? "" : "hidden"}`}
        />
        <OtpAuthenticationForm
          className={`${currentFormID == 2 ? "" : "hidden"}`}
        />
        <ResetPasswordForm
          className={`${currentFormID == 3 ? "" : "hidden"}`}
        />
      </div>
      {/* ==WHITE SIDE== */}
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
