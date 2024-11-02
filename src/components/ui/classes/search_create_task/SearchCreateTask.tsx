import { removeCreateClassForm } from '@/store/classSlice'
import { RootState } from '@/store/rootReducer'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormCreateClass from '../form_create_class/FormCreateClass'
import InfoEmpty from '../info_empty/InfoEmpty'
import styles from './SearchCreateTask.module.scss'

const SearchCreateTask: FC = () => {
	const dispatch = useDispatch()
	const createClassForms = useSelector(
		(state: RootState) => state.class.createClassForms
	)

	const handleRemoveForm = (formId: number) => {
		dispatch(removeCreateClassForm(formId))
	}

	return (
		<div>
			{createClassForms.length === 0 ? (
				<InfoEmpty
					text='У Вас нет ни одного класса'
					className={styles.emptyField}
				/>
			) : (
				<div className={styles.wrapperForms}>
					{createClassForms.map(formId => (
						<FormCreateClass
							key={formId}
							idPrefix={`form-${formId}`}
							onFormCreated={() => handleRemoveForm(formId)}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default SearchCreateTask
