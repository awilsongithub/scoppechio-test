import React from "react";
import PropTypes from "prop-types";

export default function MediaObject(props) {
	const evenRow = props.index % 2 === 0;
	let mobile = window.innerWidth <= 576;

	let image = (
		<div className='col-md-6 media-object-image'>
			<div className='float-right'>
				<img
					src={props.obj.img_src}
					alt={props.obj.img_alt}
					className='img-fluid '
				></img>
			</div>
		</div>
	);

	let text = (
		<div className='col-md-6 media-object-text'>
			<h3 className='title-bold'>{props.obj.headline}</h3>
			<p>{props.obj.copy}</p>
		</div>
	);

	let rowContent = mobile || evenRow ? [image, text] : [text, image];

	return (
		<div className='media-object' data-aos='fade-up'>
			<div className='container'>
				<div className='row'>{rowContent}</div>
			</div>
		</div>
	);
}

MediaObject.propTypes = {
	obj: PropTypes.object.isRequired,
};
