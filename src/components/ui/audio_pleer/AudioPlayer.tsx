import pause from '@/shared/images/pause.svg'
import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'
import styles from './AudioPlayer.module.scss'
const formWaveSurferOptions = ref => ({
	container: ref,
	waveColor: '#000',
	progressColor: '#EB5931',
	cursorColor: 'transparent',
	responsive: true,
	height: 30,
	width: 152,
	normalize: true,
	backend: 'WebAudio',
	barWidth: 1.5,
	barGap: 2,
})

function formatTime(seconds) {
	const minutes = Math.floor(seconds / 60)
	const secs = Math.floor(seconds % 60)
	return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

const AudioPlayer: FC = ({ audioFile }) => {
	const waveformRef = useRef(null)
	const wavesurfer = useRef(null)
	const [playing, setPlaying] = useState(false)
	const [duration, setDuration] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)

	useEffect(() => {
		const options = formWaveSurferOptions(waveformRef.current)
		wavesurfer.current = WaveSurfer.create(options)

		wavesurfer.current.load(audioFile)

		wavesurfer.current.on('ready', () => {
			setDuration(wavesurfer.current.getDuration())
		})

		wavesurfer.current.on('audioprocess', () => {
			setCurrentTime(wavesurfer.current.getCurrentTime())
		})

		return () => {
			if (wavesurfer.current) {
				wavesurfer.current.un('audioprocess')
				wavesurfer.current.un('ready')
				wavesurfer.current.destroy()
			}
		}
	}, [audioFile])

	const handlePlayPause = () => {
		setPlaying(!playing)
		wavesurfer.current.playPause()
	}

	return (
		<div className={styles.waveformContainer}>
			<div className={styles.Time}>
				{formatTime(currentTime)} / {formatTime(duration)}
			</div>
			<div id='waveform' ref={waveformRef}></div>
			<div className='controls'>
				<button onClick={handlePlayPause} className={styles.buttonPlay}>
					{!playing ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='15'
							height='18'
							viewBox='0 0 15 18'
							fill='none'
						>
							<path
								d='M14.1335 8.96655L0.200396 0.733447V17.1999L14.1335 8.96655Z'
								fill='#D9D9D9'
							/>
						</svg>
					) : (
						<Image alt='Картинка паузы аудиофайла' src={pause} />
					)}
				</button>
			</div>
		</div>
	)
}

export default AudioPlayer
