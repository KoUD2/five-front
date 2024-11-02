import { useDebounce } from '@/hooks/useDebounce'
import { DeadlineService } from '@/services/deadlines/deadline.service'
import { useState } from 'react'
import { useQuery } from 'react-query'

export const useDeadline = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const queryData = useQuery(
		['card title', debouncedSearch],
		() => DeadlineService.getAll(),
		{
			select: ({ data }) => data,
		}
	)

	return queryData
}
