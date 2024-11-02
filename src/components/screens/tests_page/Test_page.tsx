'use client'

import { TasksService } from '@/services/tasks/tasks.service'
import { IFullTasks } from '@/shared/types/fullTasks.types'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import styles from './Test_page.module.scss'
import Grammar_test1 from './all-tests/grammar_test1/Grammar_test1'
import Grammar_test2 from './all-tests/grammar_test2/Grammar_test2'
import Test1 from './all-tests/test1/Test1'
import Test10 from './all-tests/test10/Test10'
import Test11 from './all-tests/test11/Test11'
import Test12_19 from './all-tests/test12-19/Test12_19'
import Test2 from './all-tests/test2/Test2'
import Test3_9 from './all-tests/test3-9/Test3_9'
import Test37 from './all-tests/test37/Test37'
import Test38 from './all-tests/test38/Test38'
import Test39 from './all-tests/test39/Test39'
import Test40 from './all-tests/test40/Test40'
import Test41 from './all-tests/test41/Test41'
import Test42 from './all-tests/test42/Test42'

const Test_page: FC = () => {
	const { data } = useQuery<IFullTasks>({
		queryKey: ['card-title', '66d2f0750d1ec420373e730c'],
		queryFn: () => TasksService.getAll('66d2f0750d1ec420373e730c'),
		select: data => data,
	})

	return (
		<div className={styles.wrapper}>
			<div className={styles.tasks}>
				<h1>Раздел 1. Аудирование</h1>
				<div className={styles.line}></div>
				<div className={styles.wrapperTasks}>
					<Test1 dataTask={data?.task1} />
					<Test2 dataTask={data?.task2} />
					{Array.from({ length: 7 }, (_, i) => (
						<Test3_9
							key={i + 3}
							number={i + 3}
							dataTask={data?.[`task${i + 3}`]}
						/>
					))}
				</div>
				<h1 className={styles.name}>Раздел 2. Чтение</h1>
				<div className={styles.line}></div>
				<div className={styles.wrapperTasks}>
					<Test10 dataTask={data?.task10} />
					<Test11 dataTask={data?.task11} />
					{Array.from({ length: 7 }, (_, i) => (
						<Test12_19
							key={i + 12}
							number={i + 12}
							dataTask={data?.[`task${i + 12}`]}
						/>
					))}
				</div>
				<h1 className={styles.name}>Раздел 3. Грамматика и лексика</h1>
				<div className={styles.line}></div>
				<div className={styles.wrapperTasks}>
					<Grammar_test1 dataTask={data?.task19} />
					<Grammar_test1 dataTask={data?.task19_2} />
					<Grammar_test2 dataTask={data?.task30} />
				</div>
				<h1 className={styles.name}>Раздел 4. Письменная речь</h1>
				<div className={styles.line}></div>
				<div className={styles.wrapperTasks}>
					<Test37 dataTask={data?.task37} />
					<Test38 />
					<Test39 />
					<Test40 />
					<Test41 />
					<Test42 />
				</div>
			</div>
			<div className={styles.timer}></div>
		</div>
	)
}

export default Test_page
