import cn from 'classnames'
import { SendHorizontal } from 'lucide-react'
import { FC } from 'react'
import styles from './ButtonInvitationClass.module.scss'

const ButtonInvitationClass: FC<{ className?: any }> = ({ className }) => {
	return (
		<button className={cn(styles.wrapper, className)}>
			<SendHorizontal />
			<h2>Подать заявку</h2>
		</button>
	)
}

export default ButtonInvitationClass
