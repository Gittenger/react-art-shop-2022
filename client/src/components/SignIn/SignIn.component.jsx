import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import {
	emailSignInStart,
	googleSignInStart,
} from '../../redux/slices/user.slice'
import CIndex from '../components.index'
import styles from './SignIn.module.scss'

const SignIn = () => {
	const dispatch = useDispatch()
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

		dispatch(emailSignInStart({ email, password }))
	}

	const { AuthFormContainer, FormInput, CustomButton } = CIndex

	return (
		<AuthFormContainer>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					handleChange={handleChange}
					type="email"
					name="email"
					label="Email"
					value={email}
					required
				/>
				<FormInput
					handleChange={handleChange}
					type="password"
					name="password"
					label="Password"
					value={password}
					required
				/>
				<div className={styles.Buttons}>
					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton onClick={() => dispatch(googleSignInStart())} isGoogle>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</AuthFormContainer>
	)
}

export default SignIn
