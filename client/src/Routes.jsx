import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from './redux/selectors/user.selectors.js'
import { checkUserAuth } from './redux/slices/user.slice.js'

import Layout from './components/Layout/Layout.component.jsx'
import HomePage from './pages/Home.page.jsx'
import Login from './pages/Login.page.jsx'
import Checkout from './pages/Checkout.page.jsx'
import CollectionsOverview from './pages/CollectionsOverview.page.jsx'
import CollectionDetails from './pages/CollectionDetails.page.jsx'

const AppRoutes = () => {
	const dispatch = useDispatch()
	const currentUser = useSelector(selectCurrentUser)

	useEffect(() => {
		dispatch(checkUserAuth())
	}, [dispatch])

	return (
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
							<Route
								index
								element={currentUser ? <Navigate replace to="/" /> : <Login />}
							/>
						</Route>
						<Route path="checkout">
							<Route index element={<Checkout />} />
						</Route>
					</Route>
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default AppRoutes
