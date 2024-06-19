import { API } from '@/pages/api/api'
import axios from 'axios'
import { Categories, Category, Joke, SearchJokes } from '../types/joke'

export const axiosClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_DOMAIN,
	headers: {
		'Content-Type': 'application/json',
	},
})

export async function getJokesFromSearch(query: string) {
	return await axiosClient<SearchJokes>(
		`${API.jokes.findJokesWithQuery}?query=${query}`
	)
}

export async function getRandomJoke() {
	return await axiosClient<Joke>(API.jokes.getRandomJoke)
}

export async function getRandomJokeWithCategory(category: Category) {
	return await axiosClient<Joke>(
		`${API.jokes.getRandomJokeWithCategory}?category=${category}`
	)
}

export async function getCategoriesJoke() {
	return await axiosClient<Categories>(API.jokes.getCategoriesJoke)
}
