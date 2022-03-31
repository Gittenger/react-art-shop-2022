import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signOutStart } from '../../redux/slices/user.slice'
import { selectCurrentUser } from '../../redux/selectors/user.selectors'

import CIndex from '../components.index'
import styles from './Nav.module.scss'

const Nav = () => {
	const currentUser = useSelector(selectCurrentUser)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSignOut = () => {
		dispatch(signOutStart())
		navigate('/')
	}

	const { CartIcon } = CIndex

	return (
		<nav className={styles.Nav}>
			<Link to="/shop">Shop</Link>
			<Link to="/contact">Contact</Link>
			{currentUser ? (
				<Link to="#" onClick={handleSignOut}>
					Sign out
				</Link>
			) : (
				<Link to="/login">Sign in</Link>
			)}
			<CartIcon />
		</nav>
	)
}

export default Nav
