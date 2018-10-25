import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/about/about.component";
import Account from "./components/account/account.component";
import Contact from "./components/contact/contact.component";
import BloodCountDashboard from "./components/dashboard/dashboard.component";
import Navigation from "./components/navigation/navigation.component";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/account" component={Account} />
        <Route exact={true} path="/contact" component={Contact} />
        <Route exact={true} path="/" component={BloodCountDashboard} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
