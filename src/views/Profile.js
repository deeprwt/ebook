import React from "react";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderTwo from "components/Headers/HeaderTwo.jsx";

export default function Profile() {
  return (
    <>
       <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
   
        {/* Header */}
        
        <HeaderTwo />
      </div>
    </>
  );
}
