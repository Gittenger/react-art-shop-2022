import React from 'react'
import styles from './AuthFormContainer.module.scss'

const AuthFormContainer = ({ children }) => (
	<div className={styles.Container}>{children}</div>
)

export default AuthFormContainer
