import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IListJokesProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	query: string
}
