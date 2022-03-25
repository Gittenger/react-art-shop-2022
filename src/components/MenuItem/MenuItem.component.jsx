import React from 'react'
import styles from './MenuItem.module.scss'

const MenuItem = ({ title, subtitle, imgSrc }) => (
	<div className={styles.Container}>
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
	</div>
)

export default MenuItem
