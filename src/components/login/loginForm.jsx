import { useDispatch, useSelector } from "react-redux";
import { selectInputsInfo, setInputs } from "../../pages/login/loginSlice";
import CustomTextInput from "../shared/customTextInput";
import CustomPasswordInput from "../shared/customPasswordInput";
import CustomButton from "../shared/customButton";

export default function LoginForm() {
  const inputs = useSelector(selectInputsInfo);
  const dispatch = useDispatch();
  console.log(inputs);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex flex-col items-center w-full md:w-115 px-5 py-10 rounded-[20px] space-y-6 bg-white font-[Cairo]"
    >
      <h1 className="font-[700] text-[22px]">تسجيل الدخول</h1>
      <div className="w-full flex flex-col items-end space-y-2">
        <label className="font-[400] text-[14px]">البريد الإلكتروني</label>
        <CustomTextInput
          value={inputs.email}
          onChange={(value) => dispatch(setInputs({ email: value }))}
          type="email"
          className={"w-full"}
        />
      </div>
      <div className="w-full flex flex-col items-end space-y-2">
        <label className="font-[400] text-[14px]">كلمة المرور</label>
        <CustomPasswordInput
          value={inputs.password}
          onChange={(value) => dispatch(setInputs({ password: value }))}
          className={"w-full"}
        />
      </div>
      <CustomButton title={"تسجيل الدخول"} />
      <div className="w-full text-end underline font-[400] text-[14px]">
        <a
          onClick={() => {
            console.log("clicked");
          }}
        >
          نسيت كلمة المرور
        </a>
      </div>
    </form>
  );
}
