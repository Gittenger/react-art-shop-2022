import React, { useEffect } from 'react'

import styles from './FormInput.module.scss'

const FormInput = ({ label, handleChange, ...otherProps }) => {
	return (
		<div className={styles.Container}>
			<input onChange={handleChange} {...otherProps} />
			<label
				className={`${styles.Label} ${
					otherProps.value.length > 0 ? `${styles.LabelShrink}` : ''
				}`}
			>
				{label}
			</label>
		</div>
	)
}

export default FormInput
