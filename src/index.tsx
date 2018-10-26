import * as React from "react";
import { Grid } from "react-bootstrap";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/about/about.component";
import Account from "./components/account/account.component";
import Contact from "./components/contact/contact.component";
import BloodCountDashboard from "./components/dashboard/dashboard.component";
import Footer from "./components/layout/footer";
import Navigation from "./components/layout/navigation.component";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <Grid>
      <Navigation />
      <Switch>
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/account" component={Account} />
        <Route exact={true} path="/contact" component={Contact} />
        <Route exact={true} path="/" component={BloodCountDashboard} />
      </Switch>
      <Footer />
    </Grid>
  </Router>,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
