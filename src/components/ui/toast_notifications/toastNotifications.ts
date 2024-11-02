import { toast } from 'react-hot-toast'

export const showSuccessToast = (message: string) => {
	toast.success(message, {
		duration: 5000,
		position: 'top-right',
		icon: '🎉',
		style: {
			background: '#4caf50',
			color: '#fff',
			borderRadius: '8px',
			padding: '16px',
		},
	})
}

export const showErrorToast = (message: string) => {
	toast.error(message, {
		duration: 5000,
		position: 'top-right',
		icon: '⚠️',
		style: {
			background: '#f56565',
			color: '#fff',
			borderRadius: '8px',
			padding: '16px',
		},
	})
}

export const showInfoToast = (message: string) => {
	toast(message, {
		duration: 4000,
		position: 'top-right',
		icon: 'ℹ️',
		style: {
			background: '#2196f3',
			color: '#fff',
			borderRadius: '8px',
			padding: '16px',
		},
	})
}
