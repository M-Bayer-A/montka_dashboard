import { useDispatch, useSelector } from "react-redux";
import { couponsSelectors } from "../../../../application/states/home/coupons/couponsSelectors";
import {
  setSearchInput,
  toggleAddPopupOpen,
} from "../../../../application/states/home/coupons/couponsSlice";
import { getCouponsTableInfoUseCase } from "../../../../application/useCases/home/coupons/getCouponsTableInfoUseCase";
import CustomTextInput from "../../shared/customTextInput";
import CustomButton from "../../shared/customButton";

export default function CouponsHeader() {
  //
  const dispatch = useDispatch();
  //
  const searchInputValue = useSelector(couponsSelectors.searchInputValue);
  //
  const handleOpenAddPopup = () => dispatch(toggleAddPopupOpen());

  const handleSetSearchValue = (value) =>
    dispatch(setSearchInput({ input: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCouponsTableInfoUseCase({ page: 1 }));
  };

  return (
    <>
      <h1 className="w-full text-right text-[24px] font-[700]">
        إدارة أكواد الدخول
      </h1>
      <div className="w-full h-11 flex flex-row justify-between">
        <form onSubmit={handleSubmit}>
          <CustomTextInput
            value={searchInputValue}
            onChange={handleSetSearchValue}
            placeholder={"ابحث بالكود أو رقم المستخدم"}
            className={
              "w-87 bg-white border-zinc-200 shadow-[0_1px_2px_rgba(0,0,0,0.05)] text-right font-[Tajawal ]"
            }
          />
        </form>
        <CustomButton
          className={"border-[#0EA5E9] bg-[#0EA5E9] text-white font-[700]"}
          title={"+ إنشاء كود جديد"}
          onClick={() => handleOpenAddPopup()}
        />
      </div>
    </>
  );
}
