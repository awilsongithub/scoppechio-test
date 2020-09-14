import React from "react";

function SignupCard() {
	return (
		<div className='card sign-up-card mb-5'>
			<div className='card-body'>
				<h3 className='card-title'>SIGN UP</h3>
				<p className='card-text'>
					Sign up for a chance to win a free copy of Halo Infinite
				</p>
				<form>
					<div className='form-group'>
						<input
							type='email'
							className='form-control form-control-lg'
							placeholder='Email Address'
						></input>
					</div>
					<div className='d-flex justify-content-center'>
						<button type='submit' className='btn btn-primary'>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SignupCard;
