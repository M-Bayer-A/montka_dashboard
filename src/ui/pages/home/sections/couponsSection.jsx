import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import CustomTable from "../../../components/home/customTable";

export default function CouponsSection() {
  const columns = [
    {
      accessorKey: "id",
      header: "ID",
      isVisible: true,
    },
    {
      accessorKey: "name",
      header: "Name",
      isVisible: true,
    },
    {
      accessorKey: "code",
      header: "Code",
      isVisible: true,
    },
  ];
  const data = [
    { id: "0", name: "ccccc", code: "sssss" },
    { id: "1", name: "ccccc", code: "sssss" },
    { id: "2", name: "ccccc", code: "sssss" },
  ];
  return (
    <div className="h-full w-full min-w-[750px] flex flex-col p-4 gap-5 overflow-auto">
      <h1 className="text-right">إنشاء أكواد الدخول</h1>
      <CustomTable columns={columns} data={data} />
    </div>
  );
}
