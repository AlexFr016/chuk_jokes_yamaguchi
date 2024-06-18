import { ListJokes, Search } from '@/components'
import { useState } from 'react'
import styles from './search.module.css'

export default function SearchPage() {
	const [searchQuery, setSearchQuery] = useState<string>('')

	return (
		<div className={styles.container}>
			<Search setSearchQuery={setSearchQuery} />
			<ListJokes query={searchQuery} />
		</div>
	)
}
