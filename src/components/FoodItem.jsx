import React from 'react'
import { SpriteAnimator } from 'react-sprite-animator'

export default function FoodItem() {
    return (
        <SpriteAnimator
            sprite={activePet.run}
            shouldAnimate={activePet.animProps.shouldAnimate}
            frameCount={activePet.animProps.frameCount}
            fps={activePet.animProps.fps}
            width={activePet.animProps.width}
            height={activePet.animProps.height}
        />

    )
}
