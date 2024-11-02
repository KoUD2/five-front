import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'
import HeadProvider from './HeadProvider/HeadProvider'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
	return (
		<HeadProvider>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</HeadProvider>
	)
}

export default MainProvider
