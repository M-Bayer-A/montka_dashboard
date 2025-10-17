import CustomButton from "../shared/customButton";
import CustomTextInput from "../shared/customTextInput";

export default function CustomFooter({
  paginationInfo,
  onNumOfRowsChange,
  getDataHandeler,
}) {
  return (
    <div
      className="h-17 w-full flex flex-row items-center justify-between gap-4 py-4
    font-[Tajawal] font-[500] text-zinc-500"
    >
      <div>to do later</div>

      <div className=" h-full flex flex-row items-center gap-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getDataHandeler(1);
          }}
          className=" h-full flex flex-row items-center gap-2.5"
        >
          <CustomTextInput
            type="number"
            value={paginationInfo.rowsPerPage}
            onChange={onNumOfRowsChange}
            className={
              "w-10 h-full !px-0.5 text-center bg-white border-zinc-200 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
            }
          />
          <p className="">عدد الأسطر في الصفحة</p>
        </form>
        <div className="h-full flex flex-row space-x-2">
          <CustomButton
            title={"السابق"}
            onClick={() => getDataHandeler(paginationInfo.previousPage)}
            className={
              "bg-white border-zinc-200 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
            }
          />
          <CustomButton
            title={"التالي"}
            onClick={() => getDataHandeler(paginationInfo.nextPage)}
            className={
              "bg-white border-zinc-200 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
            }
          />
        </div>
      </div>
    </div>
  );
}
