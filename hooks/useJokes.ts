import { mockSearchJokes } from '@/pages/api/mockJokes'
import { SearchJokes } from '@/types/joke'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'

export const useJokesFromQuery = (query: string) => {
	const notify = () => {
		toast.error('API doesn"t work, mock data is used')
	}

	return useQuery<SearchJokes, Error>({
		queryKey: ['jokes', query],
		queryFn: async () => {
			const response = await axios<SearchJokes>(`/api/jokes?query=${query}`)
				.then(res => {
					return res.data
				})
				.catch(err => {
					// т.к. апишка чака не работает используем моковые данные и делаем поиск по ним
					notify()

					let filteredJokes = mockSearchJokes.result.filter(joke =>
						joke.value.toLowerCase().includes(query.toLowerCase())
					)

					return {
						result: filteredJokes,
						total: filteredJokes.length,
					}
				})

			return response
		},
		enabled: query.length >= 4,
		staleTime: 5 * 60 * 1000,
		retry: 3,
	})
}
