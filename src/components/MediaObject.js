import React from "react";
import PropTypes from "prop-types";

export default function MediaObject(props) {
	const isEvenRow = (index) => index % 2 === 0;

	return (
		<div className='media-object' data-aos='fade-up'>
			<div className='container'>
				<div className='row'>
					{/* alternate order of image and text (on larger viewports only) */}
					<div className='col-md-6 media-object-image alternate'>
						<div className='float-right'>
							<img
								src={props.obj.img_src}
								alt={props.obj.img_alt}
								className='img-fluid '
							></img>
						</div>
					</div>
					<div className='col-md-6 media-object-text alternate'>
						<h3 className='title-bold'>{props.obj.headline}</h3>
						<p>{props.obj.copy}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

MediaObject.propTypes = {
	obj: PropTypes.object.isRequired,
};
