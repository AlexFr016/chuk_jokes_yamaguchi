export const API = {
	jokes: {
		findJokesWithQuery: process.env.NEXT_PUBLIC_DOMAIN + '/jokes/search',
		getRandomJoke: process.env.NEXT_PUBLIC_DOMAIN + '/jokes/random',
		getRandomJokeWithCategory: process.env.NEXT_PUBLIC_DOMAIN + '/jokes/random',
		getCategoriesJoke: process.env.NEXT_PUBLIC_DOMAIN + '/jokes/categories',
	},
}
