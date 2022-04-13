import React, { useState } from 'react'
import { getAnimProps } from '../pet_codex'
import { SpriteAnimator } from 'react-sprite-animator';

export default function Egg({ type, sprite, createPet }) {

    const [animProps, setAnimProps] = useState(getAnimProps("egg"));

    function handleCreatePet() {
        createPet(type);
    }

    return (
        <button onClick={() => handleCreatePet(type)}
        className='button-no-style'>
            <SpriteAnimator
                sprite={sprite}
                shouldAnimate={animProps.shouldAnimate}
                frameCount={animProps.frameCount}
                fps={animProps.fps}
                width={animProps.width}
                height={animProps.height}
            />

        </button>
    )
}
