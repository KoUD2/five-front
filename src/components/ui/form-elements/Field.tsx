import { forwardRef } from 'react'
import { IField } from './form.interface'
import styles from './form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<>
				<div style={style} className={styles.wrapper}>
					<label>
						<input placeholder={placeholder} ref={ref} type={type} {...rest} />
					</label>
				</div>
				{error && <div>{error.message}</div>}
			</>
		)
	}
)

Field.displayName = 'Field'

export default Field
