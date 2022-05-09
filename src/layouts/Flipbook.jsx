import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";


// views
import One from "views/flipbook/One.jsx";
// import Tabs from "views/flipbook/Tabs.jsx"

export default function flipbook() {
  return (
    <>

          <Switch>
            <Route path="/flipbook/one" exact component={One} />
            {/* <Route path="/flipbook/tabs" exact componet={Tabs} /> */}
            <Redirect from="/flipbook" to="/flipbook/one" />
          </Switch>
    </>
  );
}
