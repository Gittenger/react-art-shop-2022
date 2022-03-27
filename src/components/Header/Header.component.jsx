import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

const Header = () => (
	<header className={styles.Header}>
		<div>
			<Link to="/">LOGO</Link>
		</div>

		<nav>
			<Link to="/shop">Shop</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/sign-in">Sign in</Link>
		</nav>
	</header>
)

export default Header
