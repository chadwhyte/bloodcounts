import * as React from "react";
import * as ReactDOM from "react-dom";
import BloodCountDashboard from "./components/dashboard/dashboard-component";
import Navigation from "./components/navigation/navigation-component";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <div>
    <Navigation />
    <BloodCountDashboard />
  </div>,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
