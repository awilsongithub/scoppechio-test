import React from "react";
import { NavLink } from "react-router-dom";
import FooterNav from "./FooterNav";
import SocialIconList from "./SocialIconList";

function Footer() {
	return (
		<footer>
			<div className='row'>
				<div className='col-md-6'>
					<FooterNav />
				</div>
				<div className='col-md-6'>
					<SocialIconList />
				</div>
			</div>
			<div className='row'>
				<div className='col d-flex justify-content-center'>
					@2020 Test Page
				</div>
			</div>
		</footer>
	);
}

export default Footer;
