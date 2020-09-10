import React from "react";
import { NavLink } from "react-router-dom";
import SignupCard from "./SignupCard";
import VideoBackdrop from "./VideoBackdrop";
import MediaObjectList from "./MediaObjectList";

function Home() {
	return (
		<div>
			<VideoBackdrop />
			<MediaObjectList />
		</div>
	);
}

export default Home;
