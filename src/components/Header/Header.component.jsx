import React from 'react'
import { Link } from 'react-router-dom'

import CIndex from '../components.index.js'
import styles from './Header.module.scss'

const Header = () => {
	const { Nav } = CIndex

	return (
		<header className={styles.Header}>
			<div>
				<Link to="/">LOGO</Link>
			</div>

			<Nav />
		</header>
	)
}

export default Header
