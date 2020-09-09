import React from "react";
import { NavLink } from "react-router-dom";

function SignupCard() {
	return (
		<div className='card sign-up-card shadow mb-5'>
			<div className='card-body'>
				<h3 className='card-title'>SIGN UP</h3>
				<p className='card-text'>
					Sign up for a chance to win a free copy of Halo Infinite
				</p>
				<form>
					<div className='form-group'>
						<input
							type='email'
							className='form-control'
							placeholder='Email Address'
						></input>
					</div>
					<button type='submit' className='btn btn-primary'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default SignupCard;
