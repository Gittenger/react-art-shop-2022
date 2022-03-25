import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout.component.jsx'
import HomePage from './pages/Home.page.jsx'

const AppRoutes = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
			</Route>
		</Routes>
	</BrowserRouter>
)

export default AppRoutes
