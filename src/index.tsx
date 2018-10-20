import * as React from "react";
import * as ReactDOM from "react-dom";
// import App from "./App";
import AddBloodCount from "./components/add_blood_count/add-blood-count-component";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<AddBloodCount />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
