import React from 'react'
import CIndex from '../components/components.index.js'

const Login = () => {
	const { SignIn, SignUp } = CIndex

	return (
		<div>
			<SignIn />
			<SignUp />
		</div>
	)
}

export default Login
