import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { phrasesSelectors } from "../../../../application/states/home/phrases/phrasesSelectors";
import { getPhrasesTableInfoUseCase } from "../../../../application/useCases/home/phrases/getPhrasesTableInfoUseCase";
import { useEffect } from "react";
import PhrasesHeader from "../../../components/home/phrasesSection/phrasesHeader";
import PhrasesTable from "../../../components/home/phrasesSection/phrasesTable";
import PhrasesFooter from "../../../components/home/phrasesSection/phrasesFooter";
import PhrasesPopups from "../../../components/home/phrasesSection/phrasesPopups";
import { Backdrop, CircularProgress } from "@mui/material";

export default function PhrasesSection() {
  //
  const dispatch = useDispatch();
  //
  const isDataLoading = useSelector(phrasesSelectors.isDataLoading);
  const isActionLoading = useSelector(phrasesSelectors.isActionLoading);
  //
  const handleGetTableInfo = (page) =>
    dispatch(getPhrasesTableInfoUseCase({ page }));
  //
  useEffect(() => {
    handleGetTableInfo(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="min-h-full w-full min-w-[750px] flex flex-col p-4 gap-5 font-[Cairo]">
      <PhrasesHeader />
      {isDataLoading ? (
        <div className="w-full h-110">
          <Skeleton width="100%" height="100%" />
        </div>
      ) : (
        <PhrasesTable />
      )}
      <PhrasesFooter />
      <PhrasesPopups />
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={isActionLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
