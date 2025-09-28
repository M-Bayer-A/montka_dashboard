import { customIcons, getIcon } from "../../helpers/iconsHelper";
import LoginCredentialsForm from "../../components/login/loginCredentialsForm";
import OtpAuthenticationForm from "../../components/login/otpAuthenticationForm";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex md:flex-row flex-col gap-3 p-3 bg-zinc-100 overflow-auto">
      {/* BLACK SIDE */}
      <div className="w-full md:w-1/2 h-full flex justify-center items-center p-30 rounded-[20px] bg-[#1F2937]">
        <img src={getIcon(customIcons.montkaLogo)} />
      </div>
      {/* ==BLACK SIDE == */}
      {/* WHITE SIDE */}
      <div className="w-full md:w-1/2 h-full flex justify-center items-center">
        <LoginCredentialsForm className={"hidden"} />
        <OtpAuthenticationForm />
      </div>
      {/* ==WHITE SIDE== */}
    </div>
  );
}
