import React from 'react'

import styles from './SignUp.module.scss'

const SignUp = () => (
	<div>
		<h2>Don't have an account yet?</h2>
		<span>Sign up with your email and password</span>
		<form onSubmit={() => {}}>
			<input
				type="text"
				name="displayName"
				label="displayName"
				value="displayName-state"
				required
			/>
			<input
				type="email"
				name="email"
				label="email"
				value="email-state"
				required
			/>
			<input
				type="password"
				name="password"
				label="password"
				value="password-state"
				required
			/>
			<input
				type="password"
				name="confirmPassword"
				label="confirmPassword"
				value="confirmPassword-state"
				required
			/>

			<button type="submit">Sign Up</button>
		</form>
	</div>
)

export default SignUp
