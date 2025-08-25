import React from "react";

export default function ActivityTable({ rows, onChange, totals, summaryData, onSummaryChange }) {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    onChange(index, name, value);
  };

  const handleSummaryChange = (e) => {
    const { name, value } = e.target;
    onSummaryChange(name, value);
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
        
        {/* ===== Table Footer - TOTAL Row ===== */}
        <tfoot>
          <tr className="font-bold bg-gray-100">
            <td className="border border-black px-2 py-1 text-center">TOTAL</td>
            <td className="border border-black px-2 py-1"></td>
            <td className="border border-black px-2 py-1 text-center">{totals?.totalHrsTravel || ''}</td>
            <td className="border border-black px-2 py-1 text-center">{totals?.totalHrsWork || ''}</td>
            <td className="border border-black px-2 py-1 text-center">{totals?.totalCanvassing || ''}</td>
            <td className="border border-black px-2 py-1 text-center">{totals?.totalBibleStudies || ''}</td>
            <td className="border border-black px-2 py-1 text-center">{totals?.totalVisits || ''}</td>
            <td className="border border-black px-2 py-1 bg-gray-50 text-center">TOTAL</td>
            <td className="border border-black px-2 py-1 text-center">{totals?.totalCarKm || ''}</td>
            <td className="border border-black px-2 py-1 text-center">{totals?.totalExpenses || ''}</td>
          </tr>
        </tfoot>
      </table>
      
      {/* ===== Bottom Summary Section ===== */}
      <div className="border-t-0 border border-black bg-white">
        <div className="flex">
          {/* Left Section - NOW EDITABLE! */}
          <div className="flex-1 border-r border-black p-2">
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium whitespace-nowrap">Public Lectures Given:</span>
                <input
                  type="text"
                  name="publicLecturesGiven"
                  value={summaryData?.publicLecturesGiven || ''}
                  onChange={handleSummaryChange}
                  className="flex-1 border-b border-black focus:outline-none text-center h-5"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium whitespace-nowrap"># Souls Studied with:</span>
                <input
                  type="text"
                  name="soulsStudiedWith"
                  value={summaryData?.soulsStudiedWith || ''}
                  onChange={handleSummaryChange}
                  className="flex-1 border-b border-black focus:outline-none text-center h-5"
                />
              </div>
            </div>
          </div>
          
          {/* Center Section */}
          <div className="flex-1 border-r border-black p-2">
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium">Hrs. Travel:</span>
                <div className="w-16 border-b border-black text-center h-5 flex items-center justify-center">
                  {totals?.totalHrsTravel || ''}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Hrs. Work:</span>
                <div className="w-16 border-b border-black text-center h-5 flex items-center justify-center">
                  {totals?.totalHrsWork || ''}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Total Hrs:</span>
                <div className="w-16 border-b border-black text-center h-5 flex items-center justify-center">
                  {totals?.totalHrs || ''}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Section - NOW EDITABLE! */}
          <div className="flex-1 p-2">
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium">Signature:</span>
                <input
                  type="text"
                  name="signature"
                  value={summaryData?.signature || ''}
                  onChange={handleSummaryChange}
                  className="flex-1 border-b border-black focus:outline-none text-center h-5"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">% travel:</span>
                <div className="w-12 border-b border-black text-center h-5 flex items-center justify-center">
                  {totals?.percentTravel || '0%'}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Row with Status Fields - NOW EDITABLE! */}
        <div className="border-t border-black p-1">
          <div className="flex text-xs gap-1">
            <div className="flex items-center gap-1 px-2">
              <span>PDO's:</span>
              <input
                type="text"
                name="pdos"
                value={summaryData?.pdos || ''}
                onChange={handleSummaryChange}
                className="w-12 h-4 border border-black text-center focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-1 px-2">
              <span>Available:</span>
              <input
                type="text"
                name="available1"
                value={summaryData?.available1 || ''}
                onChange={handleSummaryChange}
                className="w-12 h-4 border border-black text-center focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-1 px-2">
              <span>Sick:</span>
              <input
                type="text"
                name="sick"
                value={summaryData?.sick || ''}
                onChange={handleSummaryChange}
                className="w-12 h-4 border border-black text-center focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-1 px-2">
              <span>Available:</span>
              <input
                type="text"
                name="available2"
                value={summaryData?.available2 || ''}
                onChange={handleSummaryChange}
                className="w-12 h-4 border border-black text-center focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-1 px-2">
              <span>Vacation:</span>
              <input
                type="text"
                name="vacation"
                value={summaryData?.vacation || ''}
                onChange={handleSummaryChange}
                className="w-12 h-4 border border-black text-center focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-1 px-2">
              <span>Available:</span>
              <input
                type="text"
                name="available3"
                value={summaryData?.available3 || ''}
                onChange={handleSummaryChange}
                className="w-12 h-4 border border-black text-center focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}