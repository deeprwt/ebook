import React from "react";
import { Link } from "react-router-dom";

// react {useState} are use in inline you can change from there

// importing custom css 
import "../../assets/styles/flip.css";

// components
import { Document, Page } from 'react-pdf';
// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";


const One = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const [openTabs, setOpenTabs] = React.useState(11);
  const [openTabss, setOpenTabss] = React.useState(21);
  const [openTabsss, setOpenTabsss] = React.useState(31);
  return (
    <>
      <Sidebar />
      
      
      <div className="flex flex-wrap">
        <div className="w-full  mb-12 xl:mb-0 ">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-2 border-0">
              <div className=" flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                     My Study Material
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                  <button
                   className={
                  "bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                  (openTab === 1
                    ? "text-white bg-red-600"
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
                    ? "text-white bg-red-600"
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
                    ? "text-white bg-red-600"
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
                          <li className={"px-2 align-middle text-xs p-2 padd bg-white"
                                      + (openTabs === 11
                                ? "text-white bg-lightBlue-300"
                                : "text-white bg-white")
                            }
                          >
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
                          <li className={"px-2 align-middle text-xs p-2 padd bg-white"
                                      + (openTabs === 12
                                ? "text-white bg-lightBlue-300"
                                : "text-white bg-white")
                            }
                          >
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
                    <div className="land-book part">
                          <div className={openTabs === 11 ? "block" : "hidden"} id="link11">
                            <iframe  ClassName="w-full" style={{width:"100%",height:"440px"}} src="https://eupwebdata.s3.ap-south-1.amazonaws.com/nectar/EVS+e-book/Grade+1/ebook/without+login/index.html" />
                          </div>
                          <div className={openTabs === 12 ? "block" : "hidden"} id="link12">
                          <iframe ClassName="w-full" style={{width:"100%",height:"440px"}} src="https://eupheus-perfectice.s3.ap-south-1.amazonaws.com/E+-Book/Nectar+Semester+2/book+1/evs/ebook/index.html" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true" webkitallowfullscreen="" mozallowfullscreen="" />
                          </div>
                    </div>
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2" >
              <div className="flex flex-wrap">
                    <div className="land part">
                         <ul
                          className=" dis "
                          role="tablist">
                          <li className={"px-2 align-middle text-xs p-2 padd bg-white"
                                      + (openTabss === 21
                                ? "text-white bg-lightBlue-300"
                                : "text-white bg-white")
                            }
                          >
                            <a
                              className=
                              " text-xs font-bold uppercase py-3 round center-text lock" 
                               
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
                          <li className={"px-2 align-middle text-xs p-2 padd bg-white"
                                      + (openTabss === 22
                                ? "text-white bg-lightBlue-300"
                                : "text-white bg-white")
                            }
                          >
                          <a
                              className=
                              " text-xs font-bold uppercase py-3 round center-text lock" 
                              
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
                    <div className="land-book part">
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
                    <div className="land part">
                    <ul
                          className=" dis "
                          role="tablist">
                          <li className={"px-2 align-middle text-xs p-2 padd bg-white"
                                      + (openTabsss === 31
                                ? "text-white bg-lightBlue-300"
                                : "text-white bg-white")
                            }
                          >
                            <a
                              className=
                              " text-xs font-bold uppercase py-3 round center-text lock" 
                               
                              onClick={e => {
                                e.preventDefault();
                                setOpenTabsss(31);
                              }}
                              data-toggle="tab"
                              href="#link31"
                              role="tablist"
                            >
                              {/* <i className="fas fa-book-open text-base mr-1"></i> */}
                               Semster1
                            </a>
                          </li>
                          <li className={"px-2 align-middle text-xs p-2 padd bg-white"
                                      + (openTabsss === 32
                                ? "text-white bg-lightBlue-300"
                                : "text-white bg-white")
                            }
                          >
                            <a
                                className=
                                " text-xs font-bold uppercase py-3 round center-text lock" 
                                
                                onClick={e => {
                                  e.preventDefault();
                                  setOpenTabsss(32);
                                }}
                                data-toggle="tab"
                                href="#link32"
                                role="tablist"
                              >
                                {/* <i className="fas fa-book-open text-base mr-1"></i>*/}  Semster2 
                            </a>
                          </li>
                          <li className={"px-2 align-middle text-xs p-2 padd bg-white"
                                      + (openTabsss === 33
                                ? "text-white bg-lightBlue-300"
                                : "text-white bg-white")
                            }
                          >
                            <a
                                className=
                                " text-xs font-bold uppercase py-3 round center-text lock" 
                                
                                onClick={e => {
                                  e.preventDefault();
                                  setOpenTabsss(33);
                                }}
                                data-toggle="tab"
                                href="#link33"
                                role="tablist"
                              >
                                  Semster3 
                            </a>
                          </li>
                          <li className={"px-2 align-middle text-xs p-2 padd bg-white"
                                      + (openTabsss === 34
                                ? "text-white bg-lightBlue-300"
                                : "text-white bg-white")
                            }
                          >
                            <a
                                className=
                                " text-xs font-bold uppercase py-3 round center-text lock" 
                                
                                onClick={e => {
                                  e.preventDefault();
                                  setOpenTabsss(34);
                                }}
                                data-toggle="tab"
                                href="#link34"
                                role="tablist"
                              >
                                  Semster4 
                            </a>
                          </li>
                          <li className={"px-2 align-middle text-xs p-2 padd bg-white"
                                      + (openTabsss === 35
                                ? "text-white bg-lightBlue-300"
                                : "text-white bg-white")
                            }
                          >
                            <a
                                className=
                                " text-xs font-bold uppercase py-3 round center-text lock" 
                                
                                onClick={e => {
                                  e.preventDefault();
                                  setOpenTabsss(35);
                                }}
                                data-toggle="tab"
                                href="#link35"
                                role="tablist"
                              >
                                  Semster5 
                            </a>
                          </li>
                          <li className={"px-2 align-middle text-xs p-2 padd bg-white"
                                      + (openTabsss === 36
                                ? "text-white bg-lightBlue-300"
                                : "text-white bg-white")
                            }
                          >
                            <a
                                className=
                                " text-xs font-bold uppercase py-3 round center-text lock" 
                                
                                onClick={e => {
                                  e.preventDefault();
                                  setOpenTabsss(36);
                                }}
                                data-toggle="tab"
                                href="#link36"
                                role="tablist"
                              >
                                  Semster3 
                            </a>
                          </li>
                          <li className={"px-2 align-middle text-xs p-2 padd bg-white"
                                      + (openTabsss === 37
                                ? "text-white bg-lightBlue-300"
                                : "text-white bg-white")
                            }
                          >
                            <a
                                className=
                                " text-xs font-bold uppercase py-3 round center-text lock" 
                                
                                onClick={e => {
                                  e.preventDefault();
                                  setOpenTabsss(37);
                                }}
                                data-toggle="tab"
                                href="#link37"
                                role="tablist"
                              >
                                  Semster7 
                            </a>
                          </li>
                          <li className={"px-2 align-middle text-xs p-2 padd bg-white"
                                      + (openTabsss === 38
                                ? "text-white bg-lightBlue-300"
                                : "text-white bg-white")
                            }
                          >
                            <a
                                className=
                                " text-xs font-bold uppercase py-3 round center-text lock" 
                                
                                onClick={e => {
                                  e.preventDefault();
                                  setOpenTabsss(38);
                                }}
                                data-toggle="tab"
                                href="#link38"
                                role="tablist"
                              >
                                  Semster8 
                            </a>
                          </li>
                        </ul>
                    </div>
                        <div className="land-book part">
                              <div className={openTabsss === 31 ? "block" : "hidden"} id="link31">
                              <iframe  ClassName="w-full" style={{width:"100%",height:"600px"}} src="https://eupheus-perfectice.s3.ap-south-1.amazonaws.com/E+-Book/Nectar+Semester+2/book+1/evs/Answer+key/Answer+Key_EVS_semester+2+book+1_updated.pdf"   frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true" webkitallowfullscreen="" mozallowfullscreen=""></iframe>
                              </div>
                              <div className={openTabsss === 32 ? "block" : "hidden"} id="link32">
                                <iframe  ClassName="w-full" style={{width:"100%",height:"600px"}} src="https://eupheus-perfectice.s3.ap-south-1.amazonaws.com/E+-Book/Nectar+Semester+2/book+1/evs/Answer+key/Answer+Key_EVS_semester+2+book+1_updated.pdf" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true" webkitallowfullscreen="" mozallowfullscreen=""></iframe>
                              </div>
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

export default One;

