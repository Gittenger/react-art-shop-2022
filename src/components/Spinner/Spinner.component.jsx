import React from 'react'
import { BallTriangle as Loader } from 'react-loader-spinner'

const Spinner = () => (
	<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
		<Loader />
	</div>
)

export default Spinner
