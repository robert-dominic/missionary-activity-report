import React from "react";

export default function Header({ data, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="flex flex-col gap-2 p-4 pb-0 text-sm border border-none font-poppins">
      <div className="flex justify-between items-start">
        <div className="flex flex-col leading-tight text-[1.1rem] tracking-widest">
          <p className="font-bold">MISSIONARY</p>
          <p className="font-bold">ACTIVITY</p>
          <p className="font-bold">REPORT</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[1.3em] font-bold tracking-wide">Seventh-day Adventist Church Reform Movement IMS</p>
          <p className="text-[12px] italic">"Be clear and centered on the one great object of saving souls." 4T 265</p>
        </div>
        <div className="flex items-center">
          <label htmlFor="year" className="mr-1 font-semibold whitespace-nowrap">
            Year:
          </label>
          <input
            id="year"
            type="text"
            name="year"
            value={data.year}
            onChange={handleChange}
            className="w-16 border-b border-black text-center focus:outline-none"
          />
        </div>
      </div>

      {/* Row 1: Name of the Field & Approved by */}
      <div className="flex justify-between items-end mt-2">
        <div className="flex items-center">
          <label htmlFor="nameOfTheField" className="mr-1 font-semibold whitespace-nowrap">
            Name of the Field:
          </label>
          <input
            id="nameOfTheField"
            type="text"
            name="nameOfTheField"
            value={data.nameOfTheField}
            onChange={handleChange}
            className="flex-1 w-fit border-b border-black focus:outline-none"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="approvedBy" className="mr-1 font-semibold whitespace-nowrap">
            Approved by:
          </label>
          <input
            id="approvedBy"
            type="text"
            name="approvedBy"
            value={data.approvedBy}
            onChange={handleChange}
            className="flex-1 w-fit border-b border-black focus:outline-none"
          />
        </div>
      </div>

      {/* Row 2: Name, Month, Date, General Conference */}
      <div className="flex justify-between items-end mt-2">
        <div className="flex items-center">
          <label htmlFor="name" className="mr-1 font-semibold whitespace-nowrap">
            Name:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="w-28 border-b border-black focus:outline-none"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="month" className="mr-1 font-semibold">
            Month:
          </label>
          <input
            id="month"
            type="text"
            name="month"
            value={data.month}
            onChange={handleChange}
            className="w-20 border-b border-black focus:outline-none"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="date" className="mr-1 font-semibold">
            Date:
          </label>
          <input
            id="date"
            type="text"
            name="date"
            value={data.date}
            onChange={handleChange}
            className="w-16 border-b border-black focus:outline-none"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="generalConference" className="mr-1 font-semibold whitespace-nowrap">
            General Conference:
          </label>
          <input
            id="generalConference"
            type="text"
            name="generalConference"
            value={data.generalConference}
            onChange={handleChange}
            className="w-20 border-b border-black focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}