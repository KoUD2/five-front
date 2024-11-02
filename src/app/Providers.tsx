'use client'

import store from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PropsWithChildren, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

export function Providers({ children }: PropsWithChildren) {
	const [client] = useState(new QueryClient())

	return (
		<QueryClientProvider client={client}>
			<Toaster />
			<Provider store={store}>{children}</Provider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
