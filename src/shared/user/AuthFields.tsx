// import { FC } from 'react'
// import { FormState, UseFormRegister } from 'react-hook-form'

// import { validEmail } from '@/shared/regex'
// import Field from '@/ui/form-elements/Field'
// import styles from './AuthFields.module.scss'

// interface IAuthFields {
// 	register: UseFormRegister<any>
// 	formState: FormState<any>
// 	isPasswordRequired?: boolean
// 	isLeft?: string
// }

// const AuthFields: FC<IAuthFields> = ({
// 	register,
// 	formState: { errors },
// 	isPasswordRequired = true,
// 	isLeft,
// }) => {
// 	return (
// 		<div className={styles.wrapper}>
// 			{isLeft === 'true' ? (
// 				<Field
// 					{...register('firstName', {
// 						required: 'Name is required!',
// 					})}
// 					placeholder='Имя'
// 				/>
// 			) : (
// 				''
// 			)}

// 			<Field
// 				{...register('email', {
// 					required: 'Почта обязательна',
// 					pattern: {
// 						value: validEmail,
// 						message: 'Введите валидную почту',
// 					},
// 				})}
// 				placeholder='Почта'
// 				autoComplete='username'
// 				error={errors.email}
// 			/>
// 			<Field
// 				{...register(
// 					'password',
// 					isPasswordRequired
// 						? {
// 								required: 'Пароль обязателен',
// 								minLength: {
// 									value: 6,
// 									message: 'Минимальная длина пароля 6 символов',
// 								},
// 							}
// 						: {}
// 				)}
// 				placeholder='Пароль'
// 				autoComplete='current-password'
// 				type='password'
// 				error={errors.password}
// 			/>
// 		</div>
// 	)
// }

// export default AuthFields
