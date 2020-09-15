import React from "react";
import { NavLink } from "react-router-dom";
import robotIcon from "../media/002-robot-head.svg";
import "bootstrap/js/src/collapse.js";

export default function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg bg-primary-gradient navbar-dark'>
			<div className='container'>
				<NavLink to='/' exact className='navbar-brand'>
					<img
						src={robotIcon}
						alt='brand icon link to home page'
						className='icon-nav-icon'
					></img>
				</NavLink>
				<button
					className='navbar-toggler collapsed'
					type='button'
					data-toggle='collapse'
					data-target='#navBarNav'
					aria-controls='navBarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse flex-row-reverse'
					id='navBarNav'
				>
					<ul className='navbar-nav align-items-center'>
						<li className='nav-item'>
							<NavLink to='/community' exact className='nav-link'>
								COMMUNITY
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/store' exact className='nav-link'>
								STORE
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/support' exact className='nav-link'>
								SUPPORT
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/account' exact className='nav-link'>
								ACCOUNT
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
