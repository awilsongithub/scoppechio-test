/** STYLES */
// import "./custom.scss";
// import "./index.css";

/** FORGET ABOVE THEMING SETUP FOR NOW JUST USE THESE INSTRUCTIONS
 * https://www.tutorialspoint.com/adding-bootstrap-to-react-js-project
 */
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

/** OTHER */
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
