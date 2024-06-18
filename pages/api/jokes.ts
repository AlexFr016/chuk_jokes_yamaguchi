import { getJokesFromSearch } from '@/services/joke.service'
import { SearchJokes } from '@/types/joke'
import { AxiosResponse } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
	message?: string
	error?: string
	data?: SearchJokes
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { query } = req.query

	if (!query || typeof query !== 'string') {
		return res
			.status(400)
			.json({ error: 'Query parameter is required and should be a string' })
	}

	try {
		const response: AxiosResponse<SearchJokes> = await getJokesFromSearch(query)
		res.status(200).json({ data: response.data })
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch jokes' })
	}
}
