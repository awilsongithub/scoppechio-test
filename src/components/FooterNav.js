import React from "react";
import { NavLink } from "react-router-dom";

function FooterNav() {
	const activeStyle = { color: "orange" };

	return (
		<ul className='nav flex-column'>
			<li className='nav-item'>
				<NavLink to='/store' exact activeStyle={activeStyle}>
					Store
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink to='/store' exact activeStyle={activeStyle}>
					Store
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink to='/store' exact activeStyle={activeStyle}>
					Store
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink to='/store' exact activeStyle={activeStyle}>
					Store
				</NavLink>
			</li>
		</ul>
	);
}

export default FooterNav;
