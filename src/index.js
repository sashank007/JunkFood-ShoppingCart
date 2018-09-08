import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Counters from "./Components/counters";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { Timeline } from "react-twitter-widgets";
import calculator from "./Components/calculator";

//ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<Counters />, document.getElementById("root"));
// ReactDOM.render(
//   <Timeline
//     dataSource={{
//       sourceType: "profile",
//       screenName: "Eminem"
//     }}
//     options={{
//       username: "Eminem",
//       height: "1000",
//       width: "10000"
//     }}
//     onLoad={() => console.log("Timeline is loaded!")}
//   />,
//   document.getElementById("root")
// );
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
