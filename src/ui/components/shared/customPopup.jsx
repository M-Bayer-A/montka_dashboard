import { Backdrop } from "@mui/material";
import CustomButton from "./customButton";

export default function CustomPopup({
  children,
  isOpen,
  title = "",
  disableSubmit = false,
  onSubmit = () => {},
  onClose = () => {},
}) {
  return (
    <Backdrop
      sx={(theme) => ({
        color: "#fff",
        padding: "4px",
        zIndex: theme.zIndex.drawer + 1,
      })}
      open={isOpen}
    >
      <div
        className="min-w-full md:min-w-125 max-h-[90vh] flex flex-col px-5 py-10 gap-6  
        rounded-[20px] bg-white text-black font-[Cairo] text-right"
      >
        <h1 className="font-bold text-[22px]">{title}</h1>
        <div className="w-full p-2 overflow-auto">{children}</div>
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
            disabled={disableSubmit}
          />
        </div>
        {/* ==Action Buttons== */}
      </div>
    </Backdrop>
  );
}
