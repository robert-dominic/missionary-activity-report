import React, { useState } from "react";
import Header from "./components/Header";
import ActivityTable from "./components/ActivityTable";
import Footer from "./components/Footer";

export default function App() {
  // Header state
  const [headerData, setHeaderData] = useState({
    year: "20_",
    nameOfTheField: "",
    approvedBy: "",
    name: "",
    month: "",
    date: "",
    generalConference: "",
  });

  // Table rows state
  const [rows, setRows] = useState([
    {
      date: "2025-08-01",
      place: "",
      hrsTravel: "",
      hrsWork: "",
      canvassing: "",
      bibleStudies: "",
      visits: "",
      otherActivities: "",
      otherColumn: "",
      carKm: "",
      expenses: "",
    },
  ]);

  // Footer state
  const [footerData, setFooterData] = useState({
    total: "",
    publicLecturesGiven: "",
    soulsStudiedWith: "",
    signature: "",
    percentTravel: "",
    podos: "",
    available1: "",
    sick: "",
    available2: "",
    vacation: "",
    available3: "",
  });

  // Update header
  const handleHeaderChange = (name, value) => {
    setHeaderData((prev) => ({ ...prev, [name]: value }));
  };

  // Update table rows
  const handleRowChange = (index, name, value) => {
    setRows((prev) => {
      const updated = [...prev];
      updated[index][name] = value;
      return updated;
    });
  };

  // Update footer
  const handleFooterChange = (name, value) => {
    setFooterData((prev) => ({ ...prev, [name]: value }));
  };

  // Totals calculation
  const totals = rows.reduce(
    (acc, row) => {
      acc.totalHrsTravel += Number(row.hrsTravel) || 0;
      acc.totalHrsWork += Number(row.hrsWork) || 0;
      return acc;
    },
    { totalHrsTravel: 0, totalHrsWork: 0 }
  );
  totals.totalHrs = totals.totalHrsTravel + totals.totalHrsWork;

  return (
    <div className="p-6 space-y-6">
      <Header data={headerData} onChange={handleHeaderChange} />
      <ActivityTable rows={rows} onChange={handleRowChange} totals={totals} />
      <Footer data={footerData} onChange={handleFooterChange} totals={totals} />
    </div>
  );
}
