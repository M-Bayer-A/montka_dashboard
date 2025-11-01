import Skeleton from "react-loading-skeleton";
import CustomTable from "../../../components/shared/customTable";
import CustomButton from "../../../components/shared/customButton";
import CustomTextInput from "../../../components/shared/customTextInput";
import CustomFooter from "../../../components/shared/customFooter";
import { useDispatch, useSelector } from "react-redux";
import { couponsSelectors } from "../../../../application/states/home/coupons/couponsSelectors";
import { useEffect } from "react";
import { getCouponsTableInfoUseCase } from "../../../../application/useCases/home/coupons/getCouponsTableInfoUseCase";
import {
  setNumberOfRowsPerPage,
  setSearchInput,
  togglePopupOpen,
} from "../../../../application/states/home/coupons/couponsSlice";
import { copyTextHelper } from "../../../../helpers/copyTextHelper";
import CouponPopup from "../../../components/home/couponsSection/couponPopup";
import { Backdrop, CircularProgress } from "@mui/material";

export default function CouponsSection() {
  //
  const dispatch = useDispatch();
  //
  const isDataLoading = useSelector(couponsSelectors.isDataLoading);
  const isActionLoading = useSelector(couponsSelectors.isActionLoading);
  const searchInputValue = useSelector(couponsSelectors.searchInputValue);
  const paginationInfo = useSelector(couponsSelectors.paginationInfo);
  const tableInfo = useSelector(couponsSelectors.tableInfo);
  //
  const handleGetTableInfo = (page) =>
    dispatch(getCouponsTableInfoUseCase({ page }));

  const handleSetSearchValue = (value) =>
    dispatch(setSearchInput({ input: value }));

  const handleSetRowsPerPageNum = (value) =>
    dispatch(setNumberOfRowsPerPage({ number: value }));

  const handleOpenPopup = (process, code, validity) =>
    dispatch(togglePopupOpen({ process, code, validity }));

  const handleCopyCoupon = (code) => copyTextHelper(code);
  //
  useEffect(() => {
    handleGetTableInfo(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  const processedColumns = [
    ...tableInfo.columns,
    {
      accessorKey: "procedures",
      header: "إجراءات",
      isVisible: true,
    },
  ];

  const processedData = tableInfo.data.map((d) => {
    const newD = {
      ...d,
      validity: d.validity + " يوم",
      procedures: (
        <div className="flex flex-row gap-2.5">
          {d.userNumber ? null : (
            <a
              onClick={() => handleOpenPopup("edit", d.code, d.validity)}
              className="text-[#4F46E5]"
            >
              تعديل
            </a>
          )}
          <a onClick={() => handleCopyCoupon(d.code)}>نسخ</a>
        </div>
      ),
    };
    switch (newD.status) {
      case "مستخدم":
        return {
          ...newD,
          status: (
            <div className="size-fit flex px-2.5 py-1 rounded-[20px] font-[700] text-[12px] text-[#1E40AF] bg-[#DBEAFE]">
              {newD.status}
            </div>
          ),
        };
      case "منتهي":
        return {
          ...newD,
          status: (
            <div className="size-fit flex px-2.5 py-1 rounded-[20px] font-[700] text-[12px] text-[#991B1B] bg-[#FEE2E2]">
              {newD.status}
            </div>
          ),
        };
      case "متاح":
        return {
          ...newD,
          status: (
            <div className="size-fit flex px-2.5 py-1 rounded-[20px] font-[700] text-[12px] text-[#166534] bg-[#DCFCE7]">
              {newD.status}
            </div>
          ),
        };
      default:
        return {
          ...newD,
          status: (
            <div className="size-fit flex px-2.5 py-1 rounded-[20px] font-[700] text-[12px] text-[#1E40AF] bg-[#DBEAFE]">
              {newD.status}
            </div>
          ),
        };
    }
  });
  //
  return (
    <div className="min-h-full w-full min-w-[750px] flex flex-col p-4 gap-5 font-[Cairo]">
      <h1 className="w-full text-right text-[24px] font-[700]">
        إدارة أكواد الدخول
      </h1>
      <div className="w-full h-11 flex flex-row justify-between">
        <form>
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
          onClick={() => handleOpenPopup("add")}
        />
      </div>
      {isDataLoading ? (
        <div className="w-full h-110">
          <Skeleton width="100%" height="100%" />
        </div>
      ) : (
        <CustomTable columns={processedColumns} data={processedData} />
      )}
      <CustomFooter
        paginationInfo={paginationInfo}
        onNumOfRowsChange={handleSetRowsPerPageNum}
        getDataHandeler={handleGetTableInfo}
      />
      {/* Side Component */}
      <CouponPopup />
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={isActionLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* ==Side Component== */}
    </div>
  );
}
