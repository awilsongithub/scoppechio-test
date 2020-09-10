import React from "react";
import { NavLink } from "react-router-dom";

function FooterNav() {
	return (
		<ul className='nav flex-column'>
			<li className='nav-item pl-0'>
				<NavLink to='/' exact className='pl-0'>
					Guides
				</NavLink>
			</li>
			<li className='nav-item pl-0'>
				<NavLink to='/' exact className='pl-0'>
					FAQ
				</NavLink>
			</li>
			<li className='nav-item pl-0'>
				<NavLink to='/' exact className='pl-0'>
					Terms of Use
				</NavLink>
			</li>
			<li className='nav-item pl-0'>
				<NavLink to='/' exact className='pl-0'>
					Privacy Policy
				</NavLink>
			</li>
			<li className='nav-item pl-0'>
				<NavLink to='/' exact className='pl-0'>
					Information
				</NavLink>
			</li>
		</ul>
	);
}

export default FooterNav;
