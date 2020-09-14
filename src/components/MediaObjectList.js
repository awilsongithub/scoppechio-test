import React from "react";
import { NavLink } from "react-router-dom";
import MediaObject from "./MediaObject";

export default class MediaObjectList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mediaObjects: null,
			objectsLoaded: false,
		};
	}

	#mediaUrl = "https://api.staging.scoppechiohosting.com/interview-test/index.json";

	componentDidMount() {
		fetch(this.#mediaUrl)
			.then((res) => res.json())
			.then((result) =>
				this.setState({ mediaObjects: result, objectsLoaded: true })
			);
	}

	render() {
		if (!this.state.objectsLoaded) {
			return <p>Loading media....</p>;
		} else {
			return this.state.mediaObjects.map((obj, index) => (
				<MediaObject obj={obj} key={obj.id} index={index} />
			));
		}
	}
}
