import React from "react";
import { NavLink } from "react-router-dom";
import facebookIcon from "../media/social-icons/FB_Icon_Red.svg";
import twitterIcon from "../media/social-icons/Twitter_Icon_Red.svg";
import instagramIcon from "../media/social-icons/IG_Icon_Red.svg";

function SocialIconList() {
	return (
		<div className='d-flex align-items-center social-icon-list'>
			<span className='social-icon-list'>Follow Us</span>
			<img
				src={facebookIcon}
				alt='facebook icon'
				className='icon pl-2 pr-2'
			></img>
			<img
				src={twitterIcon}
				alt='twitter icon'
				className='icon pl-2 pr-2'
			></img>
			<img
				src={instagramIcon}
				alt='instagram icon'
				className='icon pl-2 pr-2'
			></img>
		</div>
	);
}

export default SocialIconList;
