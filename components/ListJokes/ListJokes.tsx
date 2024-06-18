import { useJokesFromQuery } from '@/hooks/useJokes'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { Joke } from '@/types/joke'
import cn from 'classnames'
import { useEffect, useState } from 'react'
import { CardJoke } from '../CardJoke/CardJoke'
import styles from './ListJokes.module.css'
import { IListJokesProps } from './ListJokes.props'

export const ListJokes = ({ query, className, ...props }: IListJokesProps) => {
	const { data, error, isLoading } = useJokesFromQuery(query)
	const [count, setCount] = useState<number>(0)

	useEffect(() => {
		if (data) {
			setCount(data.total)
		}
	}, [data])

	if (isLoading) {
		return (
			<div className={cn(className, styles.list)}>
				{Array.from({ length: 9 }).map((_, index) => (
					<Skeleton key={index} width={370} height={150} />
				))}
			</div>
		)
	}

	if (error) {
		return <p>Error: {error.message}</p>
	}

	return (
		<>
			{data && count > 0 && <span>Total count: {count}</span>}

			<div className={cn(className, styles.list)}>
				{data && data?.total > 0 ? (
					data?.result.map((joke: Joke) => (
						<CardJoke key={joke.id} joke={joke} />
					))
				) : (
					<div className={styles.no_jokes}>No jokes here...</div>
				)}
			</div>
		</>
	)
}
