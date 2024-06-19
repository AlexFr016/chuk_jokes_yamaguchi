import { ListJokes, Search } from '@/components'
import axios from 'axios'
import { useState } from 'react'
import styles from './search.module.css'

export const axiosClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

export default function SearchPage() {
	const [searchQuery, setSearchQuery] = useState<string>('')

	return (
		<div className={styles.container}>
			<Search setSearchQuery={setSearchQuery} />
			<ListJokes query={searchQuery} />
		</div>
	)
}
