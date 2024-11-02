'use client'

import { useState } from 'react'

interface TogglableTextProps {
	text: string
	className?: any
}

function TogglableText({ text, className }: TogglableTextProps) {
	const [isStrikethrough, setIsStrikethrough] = useState(false)

	const toggleStrikethrough = () => {
		setIsStrikethrough(!isStrikethrough)
	}

	return (
		<p
			onClick={toggleStrikethrough}
			style={{ textDecoration: isStrikethrough ? 'line-through' : 'none' }}
			className={className}
		>
			{text}
		</p>
	)
}

export default TogglableText
