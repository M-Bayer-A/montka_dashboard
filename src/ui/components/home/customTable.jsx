export default function CustomTable({ columns, data }) {
  //
  return (
    <div
      dir={"rtl"}
      className="w-full flex bg-white rounded-2xl overflow-hidden shadow-[0_0_4px_rgba(0,0,0,0.25)]"
    >
      <div className="min-w-full max-h-110 overflow-auto">
        <table className="w-full h-full text-nowrap text-center border-collapse">
          <thead>
            <tr className="h-10 bg-zinc-100 text-[#646D79] sticky top-0 z-20">
              {columns.map((column) => {
                if (column.isVisible) {
                  return (
                    <th key={column.accessorKey} className="w-fit px-4">
                      {column.header}
                    </th>
                  );
                }
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="h-10 text-[#717886]">
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
