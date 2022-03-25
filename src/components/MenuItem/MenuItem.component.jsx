import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MenuItem.module.scss'

const MenuItem = ({ title, subtitle, imgSrc, linkUrl }) => (
	<Link to={linkUrl} className={styles.Container}>
		<div
			style={{
				backgroundImage: `url(${imgSrc})`,
			}}
			className={`${styles.BgImg} bg-img`}
		></div>
		<div className={styles.Content}>
			<span>{title.toUpperCase()}</span>
			<span>{subtitle}</span>
		</div>
	</Link>
)

export default MenuItem
