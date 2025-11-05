import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { couponsSelectors } from "../../../../application/states/home/coupons/couponsSelectors";
import { useEffect } from "react";
import { getCouponsTableInfoUseCase } from "../../../../application/useCases/home/coupons/getCouponsTableInfoUseCase";
import { Backdrop, CircularProgress } from "@mui/material";
import CouponsTable from "../../../components/home/couponsSection/couponsTable";
import CouponsHeader from "../../../components/home/couponsSection/couponsHeader";
import CouponsFooter from "../../../components/home/couponsSection/couponsFooter";
import CouponsPopups from "../../../components/home/couponsSection/couponsPopups";

export default function CouponsSection() {
  //
  const dispatch = useDispatch();
  //
  const isDataLoading = useSelector(couponsSelectors.isDataLoading);
  const isActionLoading = useSelector(couponsSelectors.isActionLoading);
  //
  useEffect(() => {
    dispatch(getCouponsTableInfoUseCase({ page: 1 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="min-h-full w-full min-w-[750px] flex flex-col p-4 gap-5 font-[Cairo]">
      <CouponsHeader />
      {isDataLoading ? (
        <div className="w-full h-110">
          <Skeleton width="100%" height="100%" />
        </div>
      ) : (
        <CouponsTable />
      )}
      <CouponsFooter />
      <CouponsPopups />
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={isActionLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
