import { API } from '@/pages/api/api'
import axios from 'axios'
import { Categories, Category, Joke, SearchJokes } from '../types/joke'

export async function getJokesFromSearch(query: string) {
	return await axios<SearchJokes>(
		`${API.jokes.findJokesWithQuery}?query=${query}`
	)
}

export async function getRandomJoke() {
	return await axios<Joke>(API.jokes.getRandomJoke)
}

export async function getRandomJokeWithCategory(category: Category) {
	return await axios<Joke>(
		`${API.jokes.getRandomJokeWithCategory}?category=${category}`
	)
}

export async function getCategoriesJoke() {
	return await axios<Categories>(API.jokes.getCategoriesJoke)
}
