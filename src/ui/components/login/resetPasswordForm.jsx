import { useDispatch, useSelector } from "react-redux";
import { setInputs } from "../../../application/states/login/loginSlice";
import CustomTextInput from "../shared/customTextInput";
import CustomButton from "../shared/customButton";
import { loginSelectors } from "../../../application/states/login/loginSelectors";

export default function ResetPasswordForm({ className }) {
  const inputs = useSelector(loginSelectors.inputs);
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={`${className} flex flex-col items-center w-full md:w-115 px-5 py-10 rounded-[20px] space-y-6 bg-white font-[Cairo]`}
    >
      <h1 className="font-[700] text-[22px]">إعادة تعيين كلمة المرور</h1>
      <p className="text-right">
        سنقوم بإرسال رسالة إلى البريد الالكتروني الخاص بك لإعادة تعيين كلمة
        المرور
      </p>
      <CustomTextInput
        type={"email"}
        value={inputs.email}
        className={"w-full"}
        onChange={(value) => dispatch(setInputs({ email: value }))}
      />
      <CustomButton
        className={"bg-[#0EA5E9] border-[#0EA5E9] text-white"}
        title={"إعادة تعيين كلمة المرور"}
      />
    </form>
  );
}
