import React from "react";
import VideoBackdrop from "./VideoBackdrop";
import MediaObjectList from "./MediaObjectList";
import SignupForm from "./signupForm";
import video from "../media/scoppechio-promo-video.mp4";

function Home() {
	const videoProps = {
		video: video,
		format: "video/mp4",
		title: "Sign up for a chance to win a free copy of Halo Infinite",
	};

	return (
		<div>
			<VideoBackdrop
				video={videoProps.video}
				format={videoProps.format}
				title={videoProps.title}
				body={<SignupForm />}
			/>
			<MediaObjectList />
		</div>
	);
}

export default Home;
