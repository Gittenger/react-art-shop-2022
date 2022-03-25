import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = props => (
	<>
		<h1>LAYOUT</h1>
		{props.children}
		<Outlet />
	</>
)

export default Layout
