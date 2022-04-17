import React, { useState } from 'react'
import { getAnimProps } from '../pet_codex'
import { SpriteAnimator } from 'react-sprite-animator';

export default function Egg({ type, sprite, createPet, position }) {

    const [animProps, setAnimProps] = useState(getAnimProps("egg"));

    function handleCreatePet() {
        createPet(type);
    }

    return (
        <button onClick={() => handleCreatePet(type)}
        className={`button-no-style ${position}`}>
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
