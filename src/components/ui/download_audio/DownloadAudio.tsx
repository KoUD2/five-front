import React, { useRef, useState } from 'react'
import styles from './DownloadAudio.module.scss'

const DownloadAudio = () => {
	const [audioFile, setAudioFile] = useState<File | null>(null)
	const fileInputRef = useRef<HTMLInputElement | null>(null)

	const handleFileUpload = (file: File) => {
		if (file && file.type.startsWith('audio/')) {
			setAudioFile(file)
		} else {
			alert('Пожалуйста, загрузите аудио файл!')
		}
	}

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		const files = e.dataTransfer.files
		if (files.length > 0) {
			handleFileUpload(files[0])
		}
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			handleFileUpload(e.target.files[0])
		}
	}

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
	}

	const handleDivClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click()
		}
	}

	return (
		<div>
			<input
				ref={fileInputRef}
				type='file'
				accept='audio/*'
				className={styles.inputAudio}
				onChange={handleInputChange}
			/>
			<div
				onClick={handleDivClick}
				onDrop={handleDrop}
				onDragOver={handleDragOver}
				className={`${styles.wrapper} ${audioFile ? styles.active : ''}`}
			>
				<div>
					<p className={audioFile ? styles.activeText : ''}>
						{audioFile
							? audioFile.name
							: 'Выберите аудио файл со своего устройства'}
					</p>
				</div>
			</div>
		</div>
	)
}

export default DownloadAudio
