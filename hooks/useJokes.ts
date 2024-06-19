import { mockSearchJokes } from '@/pages/api/mockJokes'
import { axiosClient } from '@/pages/search'
import { SearchJokes } from '@/types/joke'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

export const useJokesFromQuery = (query: string) => {
	const notify = () => {
		toast.error('API doesn"t work, mock data is used')
	}

	return useQuery<SearchJokes, Error>({
		queryKey: ['jokes', query],
		queryFn: async () => {
			try {
				const response = await axiosClient.get<{ data: SearchJokes }>(
					`/jokes?query=${query}`
				)
				return response.data.data
			} catch (error) {
				notify()

				// т.к. апишка чака не работает используем моковые данные и делаем поиск по ним
				const filteredJokes = mockSearchJokes.result.filter(joke =>
					joke.value.toLowerCase().includes(query.toLowerCase())
				)

				return {
					result: filteredJokes,
					total: filteredJokes.length,
				}
			}
		},
		enabled: query.length >= 4,
		staleTime: 5 * 60 * 1000,
		retry: 3,
	})
}
