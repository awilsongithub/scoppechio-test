import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import "../App.css";
import Footer from "./Footer";
import Home from "./Home";
import Store from "./Store";
import Community from "./Community";
import NotFoundPage from "./NotFoundPage";
import Account from "./Account";
import Support from "./Support";
import React, { useEffect } from "react";
import AOS from "aos";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/community' component={Community} />
				<Route path='/store' component={Store} />
				<Route path='/support' component={Support} />
				<Route path='/account' component={Account} />
				<Route component={NotFoundPage} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
