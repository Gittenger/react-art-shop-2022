import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout.component.jsx'
import HomePage from './pages/Home.page.jsx'
import Login from './pages/Login.page.jsx'
import CollectionsOverview from './pages/CollectionsOverview.page.jsx'
import CollectionDetails from './pages/CollectionDetails.page.jsx'

const AppRoutes = () => (
	<BrowserRouter>
		<Layout>
			<Routes>
				<Route path="/">
					<Route index element={<HomePage />} />
					<Route path="shop">
						<Route index element={<CollectionsOverview />} />
						<Route path=":collectionName" element={<CollectionDetails />} />
					</Route>
					<Route path="login">
						<Route index element={<Login />} />
					</Route>
				</Route>
			</Routes>
		</Layout>
	</BrowserRouter>
)

export default AppRoutes
