import cn from 'classnames'
import styles from './CardJoke.module.css'
import { ICardJokeProps } from './CardModule.props'

export const CardJoke = ({ joke, className, ...props }: ICardJokeProps) => {
	return (
		<div className={cn(className, styles.card)}>
			<div>{joke.value}</div>
			<div className={styles.footer_container}>
				<div>{joke.id}</div>
				<div>{joke.created_at}</div>
			</div>
		</div>
	)
}
