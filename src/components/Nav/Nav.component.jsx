import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Nav.module.scss'

const Nav = () => (
	<nav className={styles.Nav}>
		<Link to="/shop">Shop</Link>
		<Link to="/contact">Contact</Link>
		<Link to="/login">Sign in</Link>
	</nav>
)

export default Nav
