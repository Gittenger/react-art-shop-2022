import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout.component.jsx'
import HomePage from './pages/Home.page.jsx'

const AppRoutes = () => (
	<BrowserRouter>
		<Layout>
			<Routes>
				<Route path="/">
					<Route index element={<HomePage />} />
				</Route>
			</Routes>
		</Layout>
	</BrowserRouter>
)

export default AppRoutes
