'use client'

import ReCAPTCHA from 'react-google-recaptcha'
import styles from './AuthForm.module.scss'
import { AuthToggle } from './AuthToggle'
import { SocialMediaButtons } from './SocialMediaButtons'
import { useAuthForm } from './useAuthForm'

interface AuthFormProps {
	isLogin: boolean
}

export function AuthForm({ isLogin }: AuthFormProps) {
	const { handleSubmit, isLoading, onSubmit, recaptchaRef, register } =
		useAuthForm(isLogin)

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.wrapperForm}>
			{!isLogin ? (
				<div>
					<label>
						<input
							type='text'
							placeholder='Имя'
							className={styles.inputField}
							{...register('name', { required: true })}
							autoComplete='name'
						/>
					</label>
				</div>
			) : (
				''
			)}

			<div className='mb-4'>
				<label>
					<input
						type='email'
						placeholder='Почта'
						className={styles.inputField}
						{...register('email', { required: true })}
					/>
				</label>
			</div>

			<div className='mb-4'>
				<label>
					<input
						type='password'
						placeholder='Пароль'
						className={styles.inputField}
						{...register('password', { required: true })}
						autoComplete='password'
					/>
				</label>
			</div>

			<ReCAPTCHA
				ref={recaptchaRef}
				size='normal'
				sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
				theme='light'
			/>

			<div className={styles.wrapperEnter}>
				<div>
					<button type='submit' disabled={isLoading} className={styles.signIn}>
						{isLoading
							? 'Загрузка...'
							: isLogin
								? 'Войти в аккаунт'
								: 'Зарегистрироваться'}
					</button>
				</div>

				<SocialMediaButtons />

				<AuthToggle isLogin={isLogin} />
			</div>
		</form>
	)
}
