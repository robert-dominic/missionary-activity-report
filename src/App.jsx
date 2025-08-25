import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import ActivityTable from "./components/ActivityTable";

export default function App() {
  // Storage key for localStorage
  const STORAGE_KEY = "missionary_activity_report";
  
  // Ref for the form container (for image export)
  const formRef = useRef(null);

  // Function to load data from localStorage
  const loadFromStorage = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        return data;
      }
    } catch (error) {
      console.error("Error loading from localStorage:", error);
    }
    return null;
  };

  // Function to save data to localStorage
  const saveToStorage = (headerData, rows) => {
    try {
      const dataToSave = {
        headerData,
        rows,
        lastSaved: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  // Initialize state with localStorage data or defaults
  const savedData = loadFromStorage();
  
  // Header state
  const [headerData, setHeaderData] = useState(
    savedData?.headerData || {
      year: "20",
      nameOfTheField: "",
      approvedBy: "",
      name: "",
      month: "",
      date: "",
      generalConference: "",
    }
  );

  // Rows state
  const [rows, setRows] = useState(
    savedData?.rows || Array.from({ length: 31 }, () => ({
      place: "",
      hrsTravel: "",
      hrsWork: "",
      canvassing: "",
      bibleStudies: "",
      visits: "",
      otherActivities: "",
      carKm: "",
      expenses: "",
    }))
  );

  // Auto-save whenever headerData or rows change
  useEffect(() => {
    saveToStorage(headerData, rows);
  }, [headerData, rows]);

  // Update header
  const handleHeaderChange = (name, value) => {
    setHeaderData((prev) => ({ ...prev, [name]: value }));
  };

  // Update table rows
  const handleRowChange = (index, name, value) => {
    setRows((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [name]: value };
      return updated;
    });
  };

  // Calculate totals
  const totals = rows.reduce(
    (acc, row) => {
      acc.totalHrsTravel += Number(row.hrsTravel) || 0;
      acc.totalHrsWork += Number(row.hrsWork) || 0;
      acc.totalCanvassing += Number(row.canvassing) || 0;
      acc.totalBibleStudies += Number(row.bibleStudies) || 0;
      acc.totalVisits += Number(row.visits) || 0;
      acc.totalCarKm += Number(row.carKm) || 0;
      acc.totalExpenses += Number(row.expenses) || 0;
      return acc;
    },
    {
      totalHrsTravel: 0,
      totalHrsWork: 0,
      totalCanvassing: 0,
      totalBibleStudies: 0,
      totalVisits: 0,
      totalCarKm: 0,
      totalExpenses: 0,
    }
  );

  totals.totalHrs = totals.totalHrsTravel + totals.totalHrsWork;
  totals.percentTravel = totals.totalHrs > 0 
    ? Math.round((totals.totalHrsTravel / totals.totalHrs) * 100) + '%'
    : '0%';

  return (
    <div className="p-4 space-y-0 max-w-full">
      {/* Form content that will be exported */}
      <div ref={formRef} className="bg-white">
        <Header data={headerData} onChange={handleHeaderChange} />
        <ActivityTable rows={rows} onChange={handleRowChange} totals={totals} />
      </div>
    </div>
  );
}