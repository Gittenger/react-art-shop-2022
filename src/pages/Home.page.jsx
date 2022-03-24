import React from 'react'

import CIndex from '../components/components.index.js'
import styles from './_styles/Pages.module.scss'

const HomePage = () => {
	const { Directory } = CIndex

	return (
		<div className={styles.Home}>
			<Directory />
		</div>
	)
}

export default HomePage
