import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import EmployeeDirectory from "./EmployeeDirectory.jsx";
import EmployeeCreate from "./EmployeeCreate.jsx";
import EmployeeDetail from "./EmployeeDetail.jsx";
import EmployeeUpdate from "./EmployeeUpdate.jsx";
import UpcomingRetirementDirectory from "./UpcomingRetirementDirectory.jsx";

class Content extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/directory" />
        <Route path="/directory" component={EmployeeDirectory} />
        <Route path="/empCreate" component={EmployeeCreate} />
        <Route path="/empEdit/:id" component={EmployeeUpdate} />
        <Route path="/empDetail/:id" component={EmployeeDetail} />
        <Route
          path="/upcomingretirement"
          component={UpcomingRetirementDirectory}
        />
        <Route
          path="/retirementemployees/employeetype/:type"
          component={UpcomingRetirementDirectory}
        />
      </Switch>
    );
  }
}

export default Content;
