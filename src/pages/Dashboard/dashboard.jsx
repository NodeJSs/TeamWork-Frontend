import React from "react";
import "./dashboard.scss";
import { Switch, Route } from "react-router-dom";
import Articles from "../Articles/Articles";
import Feed from "../Feed/feed";
import Sidebar from "../../component/sidebar/sidebar";
import Gifs from "../Gifs/Gifs";
const Dashboard = ({ match }) => (
  <div className="Dashboard">
    <Sidebar />

    <div className="dashboard-body ">
      <Switch>
        <Route exact path={`${match.path}feeds`} component={Feed} />
        <Route exact path={`${match.path}articles`} component={Articles} />
        <Route exact path={`${match.path}gifs`} component={Gifs} />
      </Switch>
    </div>
  </div>
);
export default Dashboard;
