import * as React from "react";
import { Grid } from "react-bootstrap";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import Footer from "./components/layout/footer";
import Navigation from "./components/layout/navigation.component";
import About from "./components/pages/about/about.component";
import Account from "./components/pages/account/account.component";
import Contact from "./components/pages/contact/contact.component";
import BloodCountDashboard from "./components/pages/dashboard/dashboard.container";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./state/reducers/reducers";

const store = createStore(reducer, devToolsEnhancer({}));

ReactDOM.render(
  <Provider store={store}>
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
    </Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
