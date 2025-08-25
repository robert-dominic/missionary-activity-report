import React from "react";

export default function ActivityTable({ rows, onChange }) {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    onChange(index, name, value);
  };

  // Helper function for controlled input cells
  const renderInputCell = (index, field) => (
    <td className="p-0 border border-black">
      <input
        type="text"
        name={field}
        value={rows[index]?.[field] || ""}
        onChange={(e) => handleChange(index, e)}
        className="w-full h-full text-center p-1 focus:outline-none focus:ring-0"
      />
    </td>
  );

  return (
    <div className="overflow-x-auto border border-black font-poppins text-sm">
      <table className="w-full border-collapse">
        {/* ===== Table Head ===== */}
        <thead className="bg-[#960276] text-white text-center">
          <tr>
            <th rowSpan="2" className="border border-black w-20">
              <div className="flex flex-col h-16 items-center justify-center">
                <span className="text-xs transform rotate-270 whitespace-nowrap">
                  Date
                </span>
              </div>
            </th>
            <th rowSpan="2" className="p-1 border border-black w-75">
              Place of Activity
            </th>
            <th rowSpan="2" className="border border-black w-10">
              <div className="flex flex-col h-16 items-center justify-center">
                <span className="text-xs transform rotate-270 whitespace-nowrap">
                  Hrs Travel
                </span>
              </div>
            </th>
            <th rowSpan="2" className="p-1 border border-black w-10">
              <div className="flex flex-col h-16 items-center justify-center">
                <span className="text-xs transform rotate-270 whitespace-nowrap">
                  Hrs Work
                </span>
              </div>
            </th>
            <th className="border border-black w-10">
              <div className="flex flex-col h-20 items-center justify-center">
                <span className="text-xs transform rotate-270 whitespace-nowrap">
                  Canvassing
                </span>
              </div>
            </th>
            <th className="border border-black w-10">
              <div className="flex flex-col h-20 items-center justify-center">
                <span className="text-xs transform rotate-270 whitespace-nowrap">
                  Bible Studies
                </span>
              </div>
            </th>
            <th className="border border-black w-10">
              <div className="flex flex-col h-20 items-center justify-center">
                <span className="text-xs transform rotate-270 whitespace-nowrap">
                  Visits
                </span>
              </div>
            </th>
            <th colSpan="1" className="p-1 border border-black w-150">
              Other Activities
              <br />
              <span className="text-[10px] italic font-normal">
                (private study, correspondence, preparation of articles, etc.)
              </span>
            </th>
            <th className="border border-black w-10">
              <div className="flex flex-col h-20 items-center justify-center">
                <span className="text-xs transform rotate-270 whitespace-nowrap">
                  Car km
                </span>
              </div>
            </th>
            <th className="border border-black w-10">
              <div className="flex flex-col h-20 items-center justify-center">
                <span className="text-xs transform rotate-270 whitespace-nowrap">
                  Expenses
                </span>
              </div>
            </th>
          </tr>
        </thead>

        {/* ===== Table Body ===== */}
        <tbody>
          {Array.from({ length: 31 }, (_, index) => (
            <tr key={index}>
              <td className="p-1 border border-black text-center bg-white-100">
                {index + 1}
              </td>
              {renderInputCell(index, "place")}
              {renderInputCell(index, "hrsTravel")}
              {renderInputCell(index, "hrsWork")}
              {renderInputCell(index, "canvassing")}
              {renderInputCell(index, "bibleStudies")}
              {renderInputCell(index, "visits")}
              {renderInputCell(index, "otherActivities")}
              {renderInputCell(index, "carKm")}
              {renderInputCell(index, "expenses")}
            </tr>
          ))}
        </tbody>
          <tfoot>
            <tr className="font-bold">
              <td className="border px-2 py-1 text-center">TOTAL</td>
              <td className="border px-2 py-1"></td>
              <td className="border px-2 py-1"></td>
              <td className="border px-2 py-1"></td>
              <td className="border px-2 py-1"></td>
              <td className="border px-2 py-1 bg-white"></td>
              <td className="border px-2 py-1"></td>
              <td className="border px-2 py-1"></td>
              <td className="border px-2 py-1"></td>
              <td className="border px-2 py-1"></td>
            </tr>
          </tfoot>
      </table>
    </div>
  );
}
