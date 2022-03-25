import React from 'react'
import CIndex from '../components.index.js'
import styles from './Directory.module.scss'

const Directory = () => {
	const { MenuItem } = CIndex

	return (
		<div className={styles.Container}>
			<MenuItem
				imgSrc="https://modpodgerocksblog.com/wp-content/uploads/2021/02/how-to-paint-clouds-735x955.jpg"
				subtitle="SHOP"
				title="paintings"
				linkUrl="/paintings"
			/>
			<MenuItem
				imgSrc="https://preview.redd.it/dxem0kif48p81.jpg?width=640&crop=smart&auto=webp&s=ab4cc6387f12bdaa88cf52f032cd732d2353480f"
				subtitle="SHOP"
				title="sculptures"
				linkUrl="/sculptures"
			/>
			<MenuItem
				imgSrc="https://i.pinimg.com/736x/0e/42/3a/0e423aadbe35b815abf5d0de726b3f3a.jpg"
				subtitle="SHOP"
				title="accessories"
				linkUrl="/accessories"
			/>
		</div>
	)
}

export default Directory
