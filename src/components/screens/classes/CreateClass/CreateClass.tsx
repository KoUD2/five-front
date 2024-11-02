import FormCreateClass from '@/components/ui/classes/form_create_class/FormCreateClass'
import WrapperTasks from '@/components/ui/classes/wrapper_tasks/WrapperTasks'
import { FC } from 'react'

const CreateClass: FC = () => {
	return (
		<WrapperTasks header='Создание класса'>
			<div>
				<FormCreateClass />
			</div>
		</WrapperTasks>
	)
}

export default CreateClass
