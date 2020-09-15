import React from "react";

export default function SignupForm() {
	return (
		<form className='form-inline sign-up-form'>
			<div className='form-group'>
				<input
					aria-label='enter email to sign up to win'
					type='email'
					className='form-control form-control-lg input-opaque mr-2'
					placeholder='Email Address'
				></input>
			</div>
			<div className='d-flex justify-content-center'>
				<button type='submit' className='btn btn-lg btn-primary'>
					Sign Up
				</button>
			</div>
		</form>
	);
}
