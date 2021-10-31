import React, { useState } from 'react'
import DrumPad from './DrumPad';
import padsData from './padsData'

import './app.css'

const App = () => {
	const [currentPad, setCurrentPad] = useState("Let's play music")

	const renderedPads = padsData.map(padData => <DrumPad
		key={padData.id}
		keyCode={padData.keyCode}
		keyTrigger={padData.keyTrigger}
		id={padData.id}
		url={padData.url}
		setCurrentPad={setCurrentPad} />)

	return (
		<div id="drum-machine">
			<h1 id="heading">Drum Machine</h1>
			<div id="drum-pads">
				{renderedPads}
			</div>
			<div id="display">{currentPad}</div>
		</div>
	)
}

export default App