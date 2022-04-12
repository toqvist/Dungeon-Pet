import { useState } from 'react'
// import {orchy1_idle} from './assets/pets/Orchy/orchy1_idle.png'
import orchy1_idle from './orchy1_idle.png'
import sprite from './sprite.css'
import { SpriteAnimator } from 'react-sprite-animator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="sprite-container">

        {/* <img src={orchy1_idle} alt="Orchy" width="16px"/> */}
        <SpriteAnimator
          sprite={orchy1_idle}
          shouldAnimate={true}
          frameCount={4}
          wrapAfter={4}
          fps={3}
          width={16}
          height={16}
        />

      </div>
    </div>
  )
}

export default App
