import React from "react";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderPending from "components/Headers/HeaderPending.jsx";

export default function Pending() {
  return (
    <>
       <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
   
        {/* Header */}
        
        <HeaderPending />
      </div>
    </>
  );
}
