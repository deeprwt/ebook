import React from "react";
// src images import
import book1 from "../../assets/img/book1.jpg"
// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-pink-600 pb-4 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full mb-6">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
                <CardStats
                  img={book1}
                  statSubtitle="Zoom Storybook - PKG"
                  statTitle="ZOOM - STORYBOOK"
                  statArrow="up"
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron="Nursery"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                  statButtonLink="/auth/register"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
                <CardStats
                  img={book1}
                  statSubtitle="NEW USERS"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent=""
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                  statButtonLink=""
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
                <CardStats
                  img={book1}
                  statSubtitle="SALES"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                  statButtonLink=""
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
                <CardStats
                  img={book1}
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                  statButtonLink=""
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
                <CardStats
                  img={book1}
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                  statButtonLink=""
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
                <CardStats
                  img={book1}
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                  statButtonLink=""
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
                <CardStats
                  img={book1}
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                  statButtonLink=""
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
                <CardStats
                  img={book1}
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                  statButtonLink=""
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
                <CardStats
                  img={book1}
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                  statButtonLink=""
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
