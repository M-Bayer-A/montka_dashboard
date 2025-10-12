import { useDispatch, useSelector } from "react-redux";
import CustomTextInput from "../shared/customTextInput";
import CustomPasswordInput from "../shared/customPasswordInput";
import CustomButton from "../shared/customButton";
import { loginSelectors } from "../../../application/states/login/loginSelectors";
import {
  setCurrentFormID,
  setInputs,
} from "../../../application/states/login/loginSlice";
import { checkCredentialsUseCase } from "../../../application/useCases/login/checkCredentialsUseCase";

export default function LoginCredentialsForm({ className }) {
  const inputs = useSelector(loginSelectors.inputs);
  const dispatch = useDispatch();
  const allowSubmit =
    (inputs.email && inputs.password) ||
    (inputs.email != "" && inputs.password != "")
      ? true
      : false;
  //
  return (
    <div
      className={`${className} flex flex-col items-center w-full md:w-115 px-5 py-10 rounded-[20px] space-y-6 bg-white font-[Cairo]`}
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
      <CustomButton
        title={"تسجيل الدخول"}
        disabled={!allowSubmit}
        onClick={() => {
          dispatch(checkCredentialsUseCase());
        }}
      />
      <div className="w-full text-end underline font-[400] text-[14px]">
        <a
          onClick={() => {
            dispatch(setCurrentFormID({ currentFormID: 3 }));
          }}
        >
          نسيت كلمة المرور
        </a>
      </div>
    </div>
  );
}
