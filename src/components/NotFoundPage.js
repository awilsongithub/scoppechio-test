import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
	return (
		<div className='container mb-5 mt-5'>
			<h1>404. Page Not Found</h1>
			<NavLink to='/' exact className='nav-link'>
				<button className='btn btn-primary'>Back to homepage</button>
			</NavLink>
		</div>
	);
}
