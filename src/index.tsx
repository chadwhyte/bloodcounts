import * as React from "react";
import * as ReactDOM from "react-dom";
import BloodCountDashboard from "./components/dashboard/dashboard-component";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<BloodCountDashboard />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
