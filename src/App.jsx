import { useState } from 'react'
// import {orchy1_idle} from './assets/pets/Orchy/orchy1_idle.png'
import orchy1_idle from './orchy1_idle.svg'
import { SpriteAnimator } from 'react-sprite-animator'

function App() {
  const [count, setCount] = useState(0)



  return (
    <div className="App">
      <div className="sprite-container">

        
        <SpriteAnimator
          sprite={orchy1_idle}
          shouldAnimate={true}
          frameCount={4}
          fps={3}
          width={16}
          height={16}
          
        />

      </div>
    </div>
  )
}

export default App
