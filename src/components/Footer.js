import React from "react";
import FooterNav from "./FooterNav";
import SocialIconList from "./SocialIconList";

function Footer() {
	return (
		<footer
			data-aos='fade-down'
			className='color-off-white bg-primary-gradient'
		>
			<div className='container '>
				<div className='spacer p-4'></div>
				<div className='row pt-3 footer-nav-row'>
					<div className='col-md-6'>
						<h4 className='title-bold '>HELP</h4>
						<FooterNav />
					</div>
					<div className='col-md-6 d-flex justify-content-end align-items-end pr-0'>
						<SocialIconList />
					</div>
				</div>
				<div className='row'>
					<div className='col d-flex justify-content-center pt-4 pb-4'>
						@2020 Test Page
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
