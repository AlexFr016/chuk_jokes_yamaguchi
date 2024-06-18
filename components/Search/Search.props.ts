import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ISearchProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	setSearchQuery: (query: string) => void
}
