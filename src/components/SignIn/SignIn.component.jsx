import React, { useState } from 'react'

import CIndex from '../components.index'
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

	const handleSubmit = e => {
		e.preventDefault()

		let emailSignInStart // from redux action
		emailSignInStart()
	}

	const { AuthFormContainer } = CIndex

	return (
		<AuthFormContainer>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
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
				<div className={styles.Buttons}>
					<button type="submit">Sign in</button>
					<button>Sign in with Google</button>
				</div>
			</form>
		</AuthFormContainer>
	)
}

export default SignIn
