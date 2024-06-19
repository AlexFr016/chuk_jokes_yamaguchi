import useDebounce from '@/hooks/useDebounce'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import styles from './Search.module.css'
import { ISearchProps } from './Search.props'

export const Search = ({
	setSearchQuery,
	className,
	...props
}: ISearchProps) => {
	const [inputValue, setInputValue] = useState('')

	const debouncedQuery = useDebounce<string>(inputValue, 400)
	const router = useRouter()

	const updateQueryParam = useCallback(
		(query: string) => {
			if (query.length >= 4) {
				router.push(
					{
						pathname: '/search',
						query: { query },
					},
					undefined,
					{ shallow: true }
				)
			} else {
				const { query, ...rest } = router.query
				router.push(
					{
						pathname: '/search',
						query: rest,
					},
					undefined,
					{ shallow: true }
				)
			}
		},
		[router]
	)

	useEffect(() => {
		setSearchQuery(debouncedQuery)
		console.log('use effect')
		updateQueryParam(debouncedQuery)
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
