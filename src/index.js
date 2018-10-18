import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import "./styles/colors.css";
import "./styles/media-queries.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
