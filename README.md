Missionary Activity Report
This project is a web-based application designed to help missionaries track and report their daily activities, hours, and expenses. The application provides a clean, responsive interface for logging data and automatically calculates key metrics.

Features
Daily Activity Log: A table with 31 rows for logging daily activities including:

Place of Activity

Hours (Travel and Work)

Canvassing, Bible Studies, and Visits

Other Activities

Car Kilometers

Expenses

Automatic Calculations: Totals for all numeric columns are calculated in real-time and displayed in a dedicated footer section.

Data Persistence: Data is automatically saved to your browser's local storage as you type, and is reloaded when you revisit the page.

Structured Input: Separate sections for entering header and footer information such as Year, Month, Name of the Field, and Signature.

Responsive Design: This application is primarily designed for larger screens (e.g., desktops or tablets). The layout may not be fully optimized for smaller mobile devices.

Technology Stack
React: Used for building the user interface with a component-based architecture.

Tailwind CSS: A utility-first CSS framework for fast and easy styling.

File Structure
The project is organized into modular components to improve readability and maintainability.

App.jsx: The main application component that manages the state for all the data and renders the other components. It also contains the logic for calculating the totals.

Header.jsx: A React component for the top section of the report, handling information like the year, month, and field name.

ActivityTable.jsx: The component that renders the main table for logging daily activities. It handles input changes and displays the calculated totals for each column.

Footer.jsx: The component for the bottom section of the report, which includes fields for signatures and displays the final summary totals.

Setup and Usage
To run this project on your local machine, follow these steps:

Prerequisites

Node.js (LTS version recommended)

Installation

Clone the repository or download the project files.

Navigate to the project directory in your terminal.

Install the necessary dependencies by running the following command:

npm install

Running the Application

Start the development server by running:

npm start

The application will automatically open in your default web browser at http://localhost:3000.
