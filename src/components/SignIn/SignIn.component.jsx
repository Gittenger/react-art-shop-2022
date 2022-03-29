import React, { useState } from 'react'

import styles from './SignIn.module.scss'

const SignIn = () => {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	})

	const { email, password } = credentials

	const handleChange = e => {
		const { name, value } = e.target

		setCredentials({
			...credentials,
			[name]: value,
		})
	}

	return (
		<div>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={() => {}}>
				<input
					onChange={handleChange}
					type="email"
					name="email"
					label="email"
					value={email}
					required
				/>
				<input
					onChange={handleChange}
					type="password"
					name="password"
					label="password"
					value={password}
					required
				/>
				<div>
					<button type="submit">Sign in</button>
					<button>Sign in with Google</button>
				</div>
			</form>
		</div>
	)
}

export default SignIn
