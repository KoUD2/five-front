import { PUBLIC_PAGES } from '@/config/pages/public.config'
import { useRouter } from 'next/navigation'
import styles from './AuthForm.module.scss'
export function AuthToggle({ isLogin }: { isLogin: boolean }) {
	const router = useRouter()

	return (
		<div className={styles.wrapperSocialButtons}>
			{isLogin ? (
				<p className={styles.switchEnter}>
					Нет учетной записи?
					<button
						type='button'
						className={styles.switchEnterButton}
						onClick={() => router.push(PUBLIC_PAGES.REGISTER)}
					>
						Зарегистрироваться
					</button>
				</p>
			) : (
				<p className={styles.switchEnter}>
					Уже есть аккаунт?
					<button
						type='button'
						className={styles.switchEnterButton}
						onClick={() => router.push(PUBLIC_PAGES.LOGIN)}
					>
						Войти
					</button>
				</p>
			)}
		</div>
	)
}
