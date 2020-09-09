import React from "react";
import { NavLink } from "react-router-dom";
import video from "../media/scoppechio-promo-video.mp4";
import SignupCard from "./SignupCard";

function VideoBackdrop() {
	return (
		<div className='fullwidth-video-wrapper'>
			<div className='fullwidth-video-video'>
				<video src={video} type='video/mp4' autoPlay='' loop={true}>
					{/* <source src={video} type='video/mp4'></source> */}
				</video>
			</div>
			<div className='fullwidth-video-overlay'></div>
			<div className='fullwidth-video-content container'>
				<SignupCard />
			</div>
		</div>
	);
}

export default VideoBackdrop;
