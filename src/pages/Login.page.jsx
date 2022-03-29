import React from 'react'
import CIndex from '../components/components.index.js'

import styles from './_styles/Pages.module.scss'

const Login = () => {
	const { SignIn, SignUp } = CIndex

	return (
		<div className={styles.Login}>
			<SignIn />
			<SignUp />
		</div>
	)
}

export default Login
