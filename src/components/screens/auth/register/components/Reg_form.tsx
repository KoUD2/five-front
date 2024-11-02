import { FC } from 'react'

import styles from './Reg_form.module.scss'

const Reg_form: FC<{ onSubmit: any }> = ({ onSubmit }) => {
	return (
		<form className={styles.inputs_buttonts_log_in}>
			<div className={styles.form_title}>
				<h1>Создать аккаунт</h1>
				<p>Начните улучшать английский уже сегодня</p>
			</div>
			<div className={styles.form_inputs}>
				<input type="text" placeholder="Имя" />
				<input type="email" placeholder="Почта" />
				<input type="password" placeholder="Пароль" />
			</div>
		</form>
	)
}

export default Reg_form
