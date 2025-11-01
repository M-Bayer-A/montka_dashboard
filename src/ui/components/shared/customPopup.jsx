import { Backdrop } from "@mui/material";
import CustomButton from "./customButton";

export default function CustomPopup({
  children,
  isOpen,
  title = "",
  onSubmit = () => {},
  onClose = () => {},
}) {
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={isOpen}
    >
      <div
        className="min-w-125 flex flex-col px-5 py-10 gap-6
        rounded-[20px] bg-white text-black font-[Cairo] text-right"
      >
        <h1 className="font-bold text-[22px]">{title}</h1>
        {children}
        {/* Action Buttons */}
        <div
          className="w-full flex flex-row items-center gap-5
        font-bold"
        >
          <CustomButton
            className={"bg-[#E5E7EB] border-[#E5E7EB] text-[#3C4551]"}
            title="إلغاء"
            onClick={onClose}
          />
          <CustomButton
            className={"bg-[#0EA5E9] border-[#0EA5E9] text-white"}
            title="تأكيد"
            onClick={onSubmit}
          />
        </div>
        {/* ==Action Buttons== */}
      </div>
    </Backdrop>
  );
}
