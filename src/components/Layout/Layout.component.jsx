import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = props => (
	<>
		{props.children}
		<Outlet />
	</>
)

export default Layout
