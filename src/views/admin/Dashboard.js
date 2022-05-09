import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";

// components


export default function Dashboard() {
  return (
    <>
    <Sidebar />
                <div className="relative md:ml-64 bg-blueGray-100">
                
                    
                    <HeaderStats />
                </div>
    </>
  );
}
