import { API } from '@/pages/api/api'
import axios from 'axios'
import { SearchJokes } from '../types/joke'

export async function getJokesFromSearch(query: string) {
	return await axios<SearchJokes>(
		`${API.jokes.findJokesWithQuery}?query=${query}`
	)
}

// export async function getRandomJoke() {
// 	return await axios<Joke>('https://api.chucknorris.io/jokes/random')
// }

// export async function getRandomJokeWithCategory(category: Category) {
// 	return await axios<Joke>(
// 		`https://api.chucknorris.io/jokes/random?category=${category}`
// 	)
// }

// export async function getCategoriesJoke() {
// 	return await axios<Categories>('https://api.chucknorris.io/jokes/categories')
// }
