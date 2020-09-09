// import react, navlink, write functional component that returns the jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/js/src/collapse.js";

function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container'>
				<NavLink to='/' exact className='navbar-brand'>
					Robot
				</NavLink>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navBarNav'
					aria-controls='navBarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navBarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<NavLink to='/community' exact className='nav-link'>
								Community
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/store' exact className='nav-link'>
								Store
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/support' exact className='nav-link'>
								Support
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/account' exact className='nav-link'>
								Account
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
