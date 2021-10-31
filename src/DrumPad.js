import React, { useEffect, useCallback } from 'react'

import './drum-pad.css'

const DrumPad = ({ keyCode, keyTrigger, id, url, setCurrentPad }) => {
	const handleDrumActivate = useCallback(() => {
		playSound(keyTrigger)
		setCurrentPad(id.replace('-', ' '))

		document.getElementById(id).classList.add('drum-pad-active')
		setTimeout(() => {
			document.getElementById(id).classList.remove('drum-pad-active')
		}, 100)
	}, [keyTrigger, id, setCurrentPad])

	useEffect(() => {
		const handleKeyDown = e => {
			if (e.keyCode === keyCode) {
				handleDrumActivate()
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [id, keyCode, keyTrigger, setCurrentPad, handleDrumActivate])

	const playSound = keyTrigger => {
		const audio = document.getElementById(keyTrigger)
		audio.play()
		audio.currentTime = 0
	}

	return (
		<button
			className="drum-pad"
			id={id}
			onClick={handleDrumActivate}
		>
			<audio className="clip" id={keyTrigger} src={url} />
			{keyTrigger}
		</button>
	)
}

export default DrumPad