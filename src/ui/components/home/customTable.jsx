import { useState } from "react";
import CustomCheckBox from "../shared/customCheckBox";

export default function CustomTable({ columns, data }) {
  //
  const [selectedRowsIDs, setSelectedRowsIDs] = useState([]);
  console.log(selectedRowsIDs);
  //
  const handleSelectRow = (id, checked) => {
    setSelectedRowsIDs((state) =>
      checked ? [...state, id] : state.filter((rowId) => rowId !== id)
    );
  };
  const handleSelectAllRows = (checked) => {
    if (checked) {
      const allRowsId = data.map((row) => row.id);
      setSelectedRowsIDs(allRowsId);
    } else {
      setSelectedRowsIDs([]);
    }
  };
  //
  const isAllRowsSelected =
    data.length > 0 && selectedRowsIDs.length === data.length;
  //
  const isSomeRowsSelected = selectedRowsIDs.length > 0 && !isAllRowsSelected;
  //
  return (
    <div className="w-full h-fit overflow-hidden border rounded-2xl">
      <div className="w-full max-h-110 overflow-auto  ">
        <table className="min-w-full text-nowrap text-center border-collapse">
          <thead>
            <tr className="bg-gray-50 h-10 sticky top-0 z-20 ">
              <th className="w-fit px-4">
                <div className="w-full h-full flex justify-center items-center">
                  <CustomCheckBox
                    className={`size-4
                      ${isSomeRowsSelected ? "accent-white" : "accent-black"}`}
                    checked={isSomeRowsSelected || isAllRowsSelected}
                    onCheckChange={(value) => handleSelectAllRows(value)}
                  />
                  {/* <input
                    type="checkbox"
                    className={`size-4 border rounded-2xl
                      ${isSomeRowsSelected ? "accent-white" : "accent-black"}`}
                    checked={isSomeRowsSelected || isAllRowsSelected}
                    onChange={(e) => handleSelectAllRows(e.target.checked)}
                  /> */}
                </div>
              </th>
              {columns.map((column) => {
                if (column.isVisible) {
                  return (
                    <th key={column.accessorKey} className="w-fit px-4">
                      {column.header}
                    </th>
                  );
                }
              })}
              <th className="px-4 text-transparent">___</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="h-10">
                <td>
                  <input
                    type="checkbox"
                    className="size-3.5"
                    checked={selectedRowsIDs.includes(row.id)}
                    onChange={(e) => handleSelectRow(row.id, e.target.checked)}
                  />
                </td>
                {columns.map((column) => {
                  if (column.isVisible) {
                    return (
                      <td
                        key={`${row.id}-${column.accessorKey}`}
                        className="w-fit px-4"
                      >
                        <div className="flex justify-center items-center">
                          {row[column.accessorKey] || "Not available"}
                        </div>
                      </td>
                    );
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
