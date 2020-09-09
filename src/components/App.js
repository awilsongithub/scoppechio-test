import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import "../App.css";
import Footer from "./Footer";
import Home from "./Home";
import Store from "./Store";
import Community from "./Community";
import Account from "./Account";
import Support from "./Support";

function App() {
	return (
		<div className='container-fluid mt-3'>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/community' component={Community} />
				<Route path='/store' component={Store} />
				<Route path='/support' component={Support} />
				<Route path='/account' component={Account} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
