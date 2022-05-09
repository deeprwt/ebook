import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import "./assets/styles/index.css";
// css file import
import "./assets/styles/flip.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Flipbook from "layouts/Flipbook.jsx";

// views without layouts
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Dash from "views/Dash.jsx";
import Pending from "views/Pending.jsx";

//  flip book layout
import Tabs from "views/Tabs.jsx";

// import One from "views/flipbook/One.jsx"


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add flip book layouts */}

      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      <Route path="/flipbook" component={Flipbook} />
      {/* add routes without layouts */}
      <Route path="/tabs"  exact component={Tabs} />
      <Route path="/landing" exact component={Landing} />
      {/* <Route path="/profile" exact component={Profile} />
      <Route path="/pending"  exact component={Pending} />
      <Route path="/dash"  exact component={Dash} /> */}
      {/* <Route padh="flipbook/one"  exact component={One} /> */}
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
