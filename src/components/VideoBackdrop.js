import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import video from "../media/scoppechio-promo-video.mp4";
import SignupCard from "./SignupCard";

function VideoBackdrop() {
	useEffect(() => {
		const video = document.querySelector("video");
		video.play();
	}, []);
	return (
		<div className='fullwidth-video-wrapper'>
			<div className='fullwidth-video fullwidth-video-video'>
				{/* video may not autoplay if not muted */}
				<video autoPlay='true' loop='true' muted className='video'>
					<source src={video} type='video/mp4'></source>
					Your browser does not support the video tag.
				</video>
			</div>
			<div className='fullwidth-video fullwidth-video-overlay'></div>
			<div className='fullwidth-video fullwidth-video-content'>
				<div className='container'>
					<h1>
						Sign up for a chance to win a free copy of Halo Infinite
					</h1>
					<form className='form-inline'>
						<div className='form-group'>
							<input
								type='email'
								className='form-control form-control-lg input-opaque mr-2 mb-2'
								placeholder='Email Address'
							></input>
						</div>
						<div className='d-flex justify-content-center'>
							<button
								type='submit'
								className='btn btn-lg btn-primary'
							>
								Sign Up
							</button>
						</div>
					</form>
				</div>

				{/* <div className='container d-flex justify-content-end'>
					<SignupCard />
				</div> */}
			</div>
		</div>
	);
}

export default VideoBackdrop;
