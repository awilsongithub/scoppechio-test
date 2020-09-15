import React, { useEffect } from "react";

export default function VideoBackdrop(props) {
	useEffect(() => {
		const video = document.querySelector("video");
		video.play();
	}, []);
	return (
		<div className='fullwidth-video-wrapper'>
			<div className='fullwidth-video fullwidth-video-video'>
				<video autoPlay='true' loop='true' muted className='video'>
					<source src={props.video} type={props.format}></source>
					Your browser does not support the video tag.
				</video>
			</div>
			<div className='fullwidth-video fullwidth-video-overlay'></div>
			<div className='fullwidth-video fullwidth-video-content'>
				<div className='container'>
					<h1>{props.title ? props.title : null}</h1>
					{props.body ? props.body : null}
				</div>
			</div>
		</div>
	);
}
