import React from 'react'
import { Outlet } from 'react-router-dom'
import CIndex from '../components.index'

const Layout = props => {
	const { Header } = CIndex
	return (
		<>
			<Header />
			{props.children}
			<Outlet />
		</>
	)
}

export default Layout
