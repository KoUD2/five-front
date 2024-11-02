import { FC } from 'react'

import Books from '../books/Books'
import Links_material from '../links_material/Links_material'
import Materials_main from '../materials_main/Materials_main'

const Content_page: FC<{ content: string }> = ({ content }) => {
	{
		if (content === 'books') return <Books />
		if (content === 'materials') return <Materials_main />
		if (content === 'links') return <Links_material />
	}
}

export default Content_page
