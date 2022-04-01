import React from 'react'
import { useSelector } from 'react-redux'
import { selectDirectorySections } from '../../redux/selectors/directory.selectors.js'

import CIndex from '../components.index.js'
import styles from './Directory.module.scss'

const Directory = () => {
	const { MenuItem } = CIndex
	const sections = useSelector(selectDirectorySections)

	return (
		<div className={styles.Container}>
			{sections.map(({ ...sectionProps }, i, arr) => {
				return <MenuItem subtitle="SHOP" key={i} {...sectionProps} />
			})}
		</div>
	)
}

export default Directory
