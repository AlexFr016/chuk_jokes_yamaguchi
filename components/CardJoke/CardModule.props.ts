import { Joke } from '@/types/joke'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ICardJokeProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	joke: Joke
}
