import userService from '@/services/user/user.service'
import { useQuery } from '@tanstack/react-query'

export const useMaterials = () => {
	const {
		isLoading,
		data: materials,
		refetch,
	} = useQuery({
		queryKey: ['Materials'], // Query key
		queryFn: () => userService.getMaterials(), // Query function
		select: data => data, // Transform the data, if needed
	})

	return { isLoading, materials, refetch }
}
