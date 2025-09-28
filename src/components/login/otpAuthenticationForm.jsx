import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../shared/customButton";
import CustomOtpInput from "../shared/customOtpInput";
import { selectInputsInfo, setInputs } from "../../pages/login/loginSlice";

export default function OtpAuthenticationForm({ className }) {
  const inputs = useSelector(selectInputsInfo);
  const dispatch = useDispatch();
  console.log(inputs);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={`${className} flex flex-col items-center w-full md:w-115 px-5 py-10 rounded-[20px] space-y-6 bg-white font-[Cairo]`}
    >
      <h1 className="font-[700] text-[22px]">تسجيل الدخول</h1>
      <p className="text-right">
        لقد تم إرسال رمز تسجيل الدخول إلى البريد الالكتروني الخاص بك
      </p>
      <CustomOtpInput
        value={inputs.otp}
        onChange={(value) => dispatch(setInputs({ otp: value }))}
      />
      <CustomButton title={"تسجيل الدخول"} />
    </form>
  );
}
