import React from "react";

export default function Footer({ data, totals, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="font-poppins text-sm p-4 border border-black grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 rounded-xl shadow mt-4">
      {/* Left Section - Totals and Labels */}
      <div className="flex flex-col space-y-2">
        <div className="grid grid-cols-2 gap-2 items-center">
          <label className="text-right font-bold">Total</label>
          <input
            type="text"
            name="total"
            value={data.total}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 items-center">
          <label className="text-right">Public Lectures Given:</label>
          <input
            type="text"
            name="publicLecturesGiven"
            value={data.publicLecturesGiven}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 items-center">
          <label className="text-right"># Souls Studied with:</label>
          <input
            type="text"
            name="soulsStudiedWith"
            value={data.soulsStudiedWith}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 items-center">
          <label className="text-right">Hrs. Travel:</label>
          {/* Display the calculated total for travel hours */}
          <input
            type="text"
            value={totals.totalHrsTravel}
            readOnly
            className="border p-2 rounded bg-gray-200"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 items-center">
          <label className="text-right">Hrs. Work:</label>
          {/* Display the calculated total for work hours */}
          <input
            type="text"
            value={totals.totalHrsWork}
            readOnly
            className="border p-2 rounded bg-gray-200"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 items-center">
          <label className="text-right font-bold">Total Hrs.:</label>
          {/* Display the calculated grand total of all hours */}
          <input
            type="text"
            value={totals.totalHrs}
            readOnly
            className="border p-2 rounded bg-gray-200"
          />
        </div>
      </div>

      {/* Right Section - Other Fields */}
      <div className="flex flex-col space-y-2">
        <div className="grid grid-cols-2 gap-2 items-center">
          <label className="text-right">Signature:</label>
          <input
            type="text"
            name="signature"
            value={data.signature}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 items-center">
          <label className="text-right">% Travel:</label>
          <input
            type="text"
            name="percentTravel"
            value={data.percentTravel}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 items-center">
          <label className="text-right">POD's:</label>
          <input
            type="text"
            name="podos"
            value={data.podos}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 items-center">
          <label className="text-right">Available:</label>
          <input
            type="text"
            name="available1"
            value={data.available1}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 items-center">
          <label className="text-right">Sick:</label>
          <input
            type="text"
            name="sick"
            value={data.sick}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 items-center">
          <label className="text-right">Available:</label>
          <input
            type="text"
            name="available2"
            value={data.available2}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 items-center">
          <label className="text-right">Vacation:</label>
          <input
            type="text"
            name="vacation"
            value={data.vacation}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 items-center">
          <label className="text-right">Available:</label>
          <input
            type="text"
            name="available3"
            value={data.available3}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
      </div>
    </div>
  );
}
