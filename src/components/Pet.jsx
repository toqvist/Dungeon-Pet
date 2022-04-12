import React from 'react'
import { useState } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from '../pet_codex.js'


export default function Pet({ activePet }) {
    const [animProps, setAnimProps] = useState(getAnimProps(activePet.age));
    return (
        <SpriteAnimator
            sprite={activePet.idle}
            shouldAnimate={animProps.shouldAnimate}
            frameCount={animProps.frameCount}
            fps={animProps.fps}
            width={animProps.width}
            height={animProps.height}
        />
    )
}
