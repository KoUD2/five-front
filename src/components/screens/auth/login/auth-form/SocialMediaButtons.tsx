import { useRouter } from 'next/navigation'
import styles from './AuthForm.module.scss'
export function SocialMediaButtons() {
	const router = useRouter()

	return (
		<div className={styles.wrapperSocialNetworks}>
			<button
				onClick={() => router.push('/auth/google')}
				className={styles.buttonSocialNetworks}
				type='button'
			>
				Войти через Google
			</button>
			<button
				onClick={() => router.push('/auth/github')}
				className={styles.buttonSocialNetworks}
				type='button'
			>
				Войти через ВК
			</button>
		</div>
	)
}
