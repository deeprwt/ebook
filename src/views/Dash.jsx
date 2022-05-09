import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";

// components


export default function Dash() {
  return (
    <>
    <Sidebar />
                <div className="relative md:ml-64 bg-blueGray-100">
                
                    
                    <HeaderStats />
                </div>
    
    <div className="px-4 md:px-10 mx-auto w-full -m-24">
    
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          {/* <CardLineChart /> */}
        </div>
        <div className="w-full xl:w-4/12 px-4">
          {/* <CardBarChart /> */}
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          {/* <CardPageVisits /> */}
        </div>
        <div className="w-full xl:w-4/12 px-4">
          {/* <CardSocialTraffic /> */}
        </div>
      </div>
    </div>
    </>
  );
}
