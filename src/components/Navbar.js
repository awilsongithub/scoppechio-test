// import react, navlink, write functional component that returns the jsx
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<div>
			<p>navbar works</p>
			<NavLink to='/store'>Store</NavLink>
		</div>
	);
}

export default Navbar;
