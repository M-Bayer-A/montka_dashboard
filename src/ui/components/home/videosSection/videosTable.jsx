import { useDispatch, useSelector } from "react-redux";
import CustomTable from "../../shared/customTable";
import { videosSelectors } from "../../../../application/states/home/videos/videosSelectors";
import { copyTextHelper } from "../../../../helpers/copyTextHelper";
import { toggleEditPopupOpen } from "../../../../application/states/home/videos/videosSlice";
import { BsBookmarkDash, BsBookmarkDashFill } from "react-icons/bs";

export default function VideosTable() {
  //
  const dispatch = useDispatch();
  //
  const tableInfo = useSelector(videosSelectors.tableInfo);
  //
  const handleCopyUrl = (code) => copyTextHelper(code);

  const handleOpenEditPopup = () => dispatch(toggleEditPopupOpen());
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
    const newD = {
      ...d,
      video: (
        <div className="flex flex-row gap-4 p-2.5 items-center">
          <img className="h-12.5 rounded-[6px]" src={d.video.image} />
          <p>{d.video.title}</p>
        </div>
      ),
      procedures: (
        <div className="flex flex-row gap-2.5">
          <a onClick={handleOpenEditPopup} className="text-[#4F46E5]">
            تعديل
          </a>
          <a onClick={() => handleCopyUrl(d.video.title)}>نسخ</a>
        </div>
      ),
    };
    switch (newD.pinned) {
      case true:
        return {
          ...newD,
          pinned: <BsBookmarkDashFill className="text-[#0EA5E9]" />,
        };
      case false:
        return {
          ...newD,
          pinned: <BsBookmarkDash />,
        };
      default:
        return {
          ...newD,
          pinned: <BsBookmarkDash />,
        };
    }
  });

  //
  return <CustomTable columns={processedColumns} data={processedData} />;
}
