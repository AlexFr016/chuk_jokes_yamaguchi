export type Joke = {
	icon_url: string
	id: string
	url: string
	value: string
	created_at: string
}

export type SearchJokes = {
	total: number
	result: Joke[]
}

export type Categories = Category[]

export enum Category {
	'animal',
	'career',
	'celebrity',
	'dev',
	'explicit',
	'fashion',
	'food',
	'history',
	'money',
	'movie',
	'music',
	'political',
	'religion',
	'science',
	'sport',
	'travel',
}
