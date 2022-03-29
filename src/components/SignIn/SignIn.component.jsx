import React from 'react'

import styles from './SignIn.module.scss'

const SignIn = () => (
	<div>
		<h2>Already have an account?</h2>
		<span>Sign in with your email and password</span>
		<form onSubmit={() => {}}>
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
			<div>
				<button type="submit">Sign in</button>
				<button>Sign in with Google</button>
			</div>
		</form>
	</div>
)

export default SignIn
