import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { signUpStart } from '../../redux/slices/user.slice.js'
import CIndex from '../components.index.js'

const SignUp = () => {
	const dispatch = useDispatch()
	const [credentials, setCredentials] = useState({
		email: '',
		displayName: '',
		password: '',
		confirmPassword: '',
	})

	const { confirmPassword, displayName, email, password } = credentials

	const handleChange = e => {
		const { name, value } = e.target

		setCredentials({
			...credentials,
			[name]: value,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()

		if (password !== confirmPassword) {
			alert("Passwords don't match!")
			return
		}

		dispatch(signUpStart({ email, displayName, password }))
	}

	const { AuthFormContainer, FormInput, CustomButton } = CIndex

	return (
		<AuthFormContainer>
			<h2>Don't have an account yet?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					handleChange={handleChange}
					type="text"
					name="displayName"
					label="Display Name"
					value={displayName}
					required
				/>
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
				<FormInput
					handleChange={handleChange}
					type="password"
					name="confirmPassword"
					label="Confirm Password"
					value={confirmPassword}
					required
				/>

				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
		</AuthFormContainer>
	)
}

export default SignUp
