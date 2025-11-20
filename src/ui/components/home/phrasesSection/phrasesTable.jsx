import { useDispatch, useSelector } from "react-redux";
import { phrasesSelectors } from "../../../../application/states/home/phrases/phrasesSelectors";
import CustomTable from "../../shared/customTable";
import {
  toggleDeletePopupOpen,
  toggleEditPopupOpen,
} from "../../../../application/states/home/phrases/phrasesSlice";

export default function PhrasesTable() {
  //
  const dispatch = useDispatch();
  //
  const tableInfo = useSelector(phrasesSelectors.tableInfo);
  //
  const handleOpenEditPopup = (phrase, isActive) =>
    dispatch(toggleEditPopupOpen({ phrase, isActive }));
  const handleOpenDeletePopup = () => dispatch(toggleDeletePopupOpen());
  //
  let processedColumns = [
    ...tableInfo.columns,
    {
      accessorKey: "procedures",
      header: "إجراءات",
      isVisible: true,
    },
  ];
  let processedData = tableInfo.data.map((d) => {
    return {
      ...d,
      isActive: d.isActive ? "نشط" : "غير نشط",
      procedures: (
        <div className="flex flex-row gap-2.5">
          <a
            onClick={() => handleOpenEditPopup(d.phrase, d.isActive)}
            className="text-[#4F46E5]"
          >
            تعديل
          </a>
          <a onClick={handleOpenDeletePopup} className="text-[#E24C4C]">
            حذف
          </a>
        </div>
      ),
    };
  });
  return <CustomTable columns={processedColumns} data={processedData} />;
}
