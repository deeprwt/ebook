import React from "react";
import { Link } from "react-router-dom";

// importing custom css 
import "../assets/styles/flip.css";

// components
import { Document, Page } from 'react-pdf';
// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";


const Landing = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const [openTabs, setOpenTabs] = React.useState(11);
  const [openTabss, setOpenTabss] = React.useState(21);
  return (
    <>
      <Sidebar />
      
      
      <div className="flex flex-wrap">
        <div className="w-full  mb-12 xl:mb-0 ">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className=" flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                     My Study Material
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 py-4 ">
                  <button
                   className={
                  "bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                  (openTab === 1
                    ? "text-white bg-lightBlue-600"
                    : "text-white bg-indigo-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
                  >
                    Ebook
                  </button>
                  <button
                   className={
                  "bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                  (openTab === 2
                    ? "text-white bg-lightBlue-600"
                    : "text-white bg-indigo-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
                  >
                    Answer Key
                  </button>
                  <button
                    className={
                  "bg-indigo-500 text-white text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                  (openTab === 3
                    ? "text-white bg-lightBlue-600"
                    : "text-white bg-indigo-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
                  >
                    Worksheet
                  </button>
                </div>
              </div>
              <div className={openTab === 1 ? "block" : "hidden"} id="link1" >
                <div className="flex flex-wrap">
                    <div className="land part" >
                         <ul
                          className=" dis "
                          role="tablist">
                          <li className="px-2 align-middle text-xs p-2 padd">
                            <a
                              className=
                                "text-xs font-bold uppercase py-3 round center-text lock" 
                               
                              onClick={e => {
                                e.preventDefault();
                                setOpenTabs(11);
                              }}
                              data-toggle="tab"
                              href="#link11"
                              role="tablist"
                            >
                              {/* <i className="fas fa-book-open text-base mr-1"></i> */}
                               Semster1
                            </a>
                          </li>
                          <li className="px-2 align-middle text-xs p-2 padd">
                          <a
                              className=
                                " text-xs font-bold uppercase py-3 round center-text lock" 
                              
                              onClick={e => {
                                e.preventDefault();
                                setOpenTabs(12);
                              }}
                              data-toggle="tab"
                              href="#link12"
                              role="tablist"
                            >
                              {/* <i className="fas fa-book-open text-base mr-1"></i>*/}  Semster2 
                            </a>
                          </li>
                        </ul>
                    </div>
                    <div className="land-book part ">
                          <div className={openTabs === 11 ? "block" : "hidden"} id="link11">
                            <iframe  ClassName="w-full" style={{width:"100%",height:"400px"}} src="https://eupwebdata.s3.ap-south-1.amazonaws.com/nectar/EVS+e-book/Grade+1/ebook/without+login/index.html" />
                          </div>
                          <div className={openTabs === 12 ? "block" : "hidden"} id="link12">
                          <iframe ClassName="w-full" style={{width:"100%",height:"400px"}} src="https://eupheus-perfectice.s3.ap-south-1.amazonaws.com/E+-Book/Nectar+Semester+2/book+1/evs/ebook/index.html" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true" webkitallowfullscreen="" mozallowfullscreen="" />
                          </div>
                    </div>
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2" >
              <div className="flex flex-wrap">
                    <div className="w-1/5 md\:min-w-full" style={{width:"20%"}}>
                         <ul
                          className=""
                          role="tablist">
                          <li className="px-2 align-middle text-xs p-2">
                            <a
                              className=
                                "text-xs font-bold uppercase  py-3 shadow-lg rounded block text-center" 
                               
                              onClick={e => {
                                e.preventDefault();
                                setOpenTabss(21);
                              }}
                              data-toggle="tab"
                              href="#link21"
                              role="tablist"
                            >
                              {/* <i className="fas fa-book-open text-base mr-1"></i> */}
                               Semster1
                            </a>
                          </li>
                          <li className="px-2 align-middle text-xs p-2">
                          <a
                              className=
                                " font-bold uppercase  py-3 shadow-lg rounded block text-center " 
                              
                              onClick={e => {
                                e.preventDefault();
                                setOpenTabss(22);
                              }}
                              data-toggle="tab"
                              href="#link22"
                              role="tablist"
                            >
                              {/* <i className="fas fa-book-open text-base mr-1"></i>*/}  Semster2 
                            </a>
                          </li>
                        </ul>
                    </div>
                    <div className="w-4/5" style={{width:"80%"}}>
                          <div className={openTabss === 21 ? "block" : "hidden"} id="link21">
                          <iframe  ClassName="w-full" style={{width:"100%",height:"600px"}} src="https://eupheus-perfectice.s3.ap-south-1.amazonaws.com/E+-Book/Nectar+Semester+2/book+1/evs/Answer+key/Answer+Key_EVS_semester+2+book+1_updated.pdf"   frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true" webkitallowfullscreen="" mozallowfullscreen=""></iframe>
                          </div>
                          <div className={openTabss === 22 ? "block" : "hidden"} id="link22">
                            <iframe  ClassName="w-full" style={{width:"100%",height:"600px"}} src="https://eupheus-perfectice.s3.ap-south-1.amazonaws.com/E+-Book/Nectar+Semester+2/book+1/evs/Answer+key/Answer+Key_EVS_semester+2+book+1_updated.pdf" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true" webkitallowfullscreen="" mozallowfullscreen=""></iframe>
                          </div>
                    </div>
                </div>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="flex flex-wrap">
                    <div className="w-1/5">
                      <ul className="py-2 px-2">
                        <li className="px-2 align-middle text-xs whitespace-nowrap p-4">Semster3</li>
                        <li className="px-2 align-middle text-xs whitespace-nowrap p-4">Semster3</li>
                      </ul>
                    </div>
                    <div className="w-4/5 mb-12 ">
                    <table className="items-center w-full bg-transparent border-collapse">
                          <thead>
                            <tr>
                              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Page name
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                Semster 1
                              </th>
                            </tr>
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              Semster 1
                              </th>
                            </tr>
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              Semster 1
                              </th>
                            </tr>
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              Semster 1
                              </th>
                            </tr>
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              Semster 1
                              </th>
                            </tr>
                          </tbody>
                      </table>
                    </div>
                </div>
              </div>
                  {/* Projects table */}

            </div>
          </div>
        </div> 
      </div>
    </>
  );
};

export default Landing;

