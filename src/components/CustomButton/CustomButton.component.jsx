import React from 'react'

import styles from './CustomButton.module.scss'

const CustomButton = ({ children, ...props }) => (
	<button
		{...props}
		className={`${styles.Button} ${
			props.isGoogle
				? styles.Google
				: props.inverted
				? styles.Inverted
				: styles.Normal
		}`}
	>
		{children}
	</button>
)

export default CustomButton
