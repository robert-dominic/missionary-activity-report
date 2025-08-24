import React from "react";

export default function Footer({ data, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl shadow">
      <input
        type="text"
        name="publicLecturesGiven"
        value={data.publicLecturesGiven}
        onChange={handleChange}
        placeholder="Public Lectures Given"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="soulsStudiedWith"
        value={data.soulsStudiedWith}
        onChange={handleChange}
        placeholder="Souls Studied With"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="signature"
        value={data.signature}
        onChange={handleChange}
        placeholder="Signature"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="percentTravel"
        value={data.percentTravel}
        onChange={handleChange}
        placeholder="% Travel"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="podos"
        value={data.podos}
        onChange={handleChange}
        placeholder="PODOS"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="sick"
        value={data.sick}
        onChange={handleChange}
        placeholder="Sick Days"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="vacation"
        value={data.vacation}
        onChange={handleChange}
        placeholder="Vacation Days"
        className="border p-2 rounded"
      />
    </div>
  );
}
