import { useSelector } from "react-redux";
import { notificationsSelectors } from "../../../../application/states/home/notifications/notificationsSelectors";
import CustomTable from "../../shared/customTable";

export default function NotificationsTable() {
  //
  const tableInfo = useSelector(notificationsSelectors.tableInfo);
  //
  const processedData = tableInfo.data.map((d) => {
    return {
      ...d,
      notifications: (
        <div className="flex flex-col items-start gap-2.5 p-2.5">
          <h1 className="font-[700] text-[#111827]">{d.notifications.title}</h1>
          <p>{d.notifications.message}</p>
        </div>
      ),
    };
  });
  return <CustomTable columns={tableInfo.columns} data={processedData} />;
}
