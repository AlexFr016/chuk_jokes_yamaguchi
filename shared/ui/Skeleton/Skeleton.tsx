import cn from 'classnames'
import { CSSProperties } from 'react'
import cls from './Skeleton.module.css'
import { ISkeletonProps } from './Skeleton.props'

export const Skeleton = (props: ISkeletonProps) => {
	const { className, width, height, border } = props

	const styles: CSSProperties = {
		width,
		height,
		borderRadius: border,
	}

	return <div className={cn(className, cls.skeleton)} style={styles} />
}
