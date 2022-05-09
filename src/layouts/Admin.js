import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Home from "views/admin/Home.jsx";
import Pending from "views/admin/Pending.jsx";

export default function Admin() {
  return (
    <>
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/home" exact component={Home} />
            <Route path="/admin/pending" exact component={Pending} />
          
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
    </>
  );
}
