import React from 'react'

import styles from './CustomButton.module.scss'

const CustomButton = ({ children, isGoogle, inverted, ...props }) => (
	<button
		{...props}
		className={`${styles.Button} ${
			isGoogle ? styles.Google : inverted ? styles.Inverted : styles.Normal
		}`}
	>
		{children}
	</button>
)

export default CustomButton
