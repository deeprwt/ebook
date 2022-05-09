import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


// components



export default function CardTable({ 
  statImg,
  statSubtitle,
  statTitle,
  statPercent,
  statPercentColor,
  statDescripiron,
  statButtonLink,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <img
                alt="..."
                src={statImg}
              />
              <h5 className=" font-semibold text-xl text-blueGray-700">
                {statSubtitle}
              </h5>
              <span className="text-blueGray-400 uppercase font-bold text-xs">
                {statTitle}
              </span>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span className={statPercentColor + " mr-2"}>
              {statPercent}
            </span>
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p>
                <Link to={statButtonLink} className="text-blueGray-200">
          <div className="w-1/4 text-center items-center bg-lightBlue-300 mt-3 cursor-pointer">
                  <small>View</small>
          </div>
                </Link>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

CardTable.defaultProps = {
  statImg:"../../assets/img/book1.jpg",
  statSubtitle: "Zoom Storybook - PKG",
  statTitle: "ZOOM - STORYBOOK",
  statArrow: "up",
  statPercent: "",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Nursery",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
  statButtonLink: ""
};

CardTable.propTypes = {
  statImg: PropTypes.string,
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
  statButtonLink: PropTypes.string,
};
