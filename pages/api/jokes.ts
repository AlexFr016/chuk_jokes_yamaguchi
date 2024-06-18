import { getJokesFromSearch } from '@/services/joke.service'
import { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
	message?: string
	error?: string
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

	getJokesFromSearch(query)
		.then(result => {
			res.status(200).json(result)
		})
		.catch(error => {
			res.status(500).json({ error: 'Failed to fetch jokes' })
		})
}
