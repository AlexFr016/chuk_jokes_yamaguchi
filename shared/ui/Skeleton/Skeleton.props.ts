import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ISkeletonProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	height?: string | number
	width?: string | number
	border?: string
}
