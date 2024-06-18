import useDebounce from '@/hooks/useDebounce'
import cn from 'classnames'
import { useEffect, useState } from 'react'
import styles from './Search.module.css'
import { ISearchProps } from './Search.props'

export const Search = ({
	setSearchQuery,
	className,
	...props
}: ISearchProps) => {
	const [inputValue, setInputValue] = useState('')

	const debouncedQuery = useDebounce<string>(inputValue, 400)

	useEffect(() => {
		setSearchQuery(debouncedQuery)
	}, [debouncedQuery, setSearchQuery])

	return (
		<div className={cn(className, styles.search)} {...props}>
			<input
				className={styles.input}
				type='search'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				placeholder='Search jokes...'
			/>
		</div>
	)
}
