import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ActivityTable from './components/ActivityTable';
import Footer from './components/Footer';

export default function App() {
  // initialize reportData from localStorage (preserve original shape)
  const [reportData, setReportData] = useState(() => {
    const savedData = localStorage.getItem('missionary-report-data');
    if (savedData) return JSON.parse(savedData);

    return {
      header: {
        year: '',
        nameOfTheField: '',
        month: '',
        date: '',
        approvedBy: '',
      },
      tableRows: Array.from({ length: 31 }, (_, i) => ({
        date: i + 1,
        placeOfActivity: '',
        hrsTravel: '',
        hrsWork: '',
        canvassing: '',
        bibleStudies: '',
        visits: '',
        otherActivities: '',
        otherColumn: '',
        carKm: '',
        expenses: '',
      })),
      footer: {
        publicLecturesGiven: '',
        soulsStudiedWith: '',
        signature: '',
        percentTravel: '',
        podos: '',
        sick: '',
        vacation: '',
      },
    };
  });

  const [totalHrsTravel, setTotalHrsTravel] = useState(0);
  const [totalHrsWork, setTotalHrsWork] = useState(0);
  const [totalHrs, setTotalHrs] = useState(0);

  // persist and compute totals whenever reportData changes
  useEffect(() => {
    localStorage.setItem('missionary-report-data', JSON.stringify(reportData));

    const travelSum = reportData.tableRows.reduce((sum, row) => sum + (Number(row.hrsTravel) || 0), 0);
    const workSum = reportData.tableRows.reduce((sum, row) => sum + (Number(row.hrsWork) || 0), 0);

    setTotalHrsTravel(travelSum);
    setTotalHrsWork(workSum);
    setTotalHrs(travelSum + workSum);
  }, [reportData]);

  return (
    <div className="p-6">
      {/* Header Section */}
      <Header headerData={reportData.header} setReportData={setReportData} />

      {/* Activity Table */}
      <ActivityTable tableRows={reportData.tableRows} setReportData={setReportData} />

      {/* Footer Section */}
      <Footer footerData={reportData.footer} setReportData={setReportData} />

      {/* Totals */}
      <div className="mt-6 p-4 border rounded bg-gray-100">
        <p>Total Hours Travel: {totalHrsTravel}</p>
        <p>Total Hours Work: {totalHrsWork}</p>
        <p>Grand Total Hours: {totalHrs}</p>
      </div>
    </div>
  );
}


// -------------------------
// File: src/components/Header.jsx
// -------------------------
import React from "react";

export default function Header({ data, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl shadow">
      <input
        type="text"
        name="year"
        value={data.year}
        onChange={handleChange}
        placeholder="Year"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="nameOfTheField"
        value={data.nameOfTheField}
        onChange={handleChange}
        placeholder="Name of the Field"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="month"
        value={data.month}
        onChange={handleChange}
        placeholder="Month"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="date"
        value={data.date}
        onChange={handleChange}
        placeholder="Date"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="approvedBy"
        value={data.approvedBy}
        onChange={handleChange}
        placeholder="Approved By"
        className="border p-2 rounded col-span-2"
      />
    </div>
  );
}
