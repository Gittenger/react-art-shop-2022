import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
	<header>
		<div>LOGO</div>

		<nav>
			<Link to="/shop">Shop</Link>
		</nav>
	</header>
)

export default Header
