import React from 'react'
import { useState } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'
import { orky, shroomy, valiant, impy, zomby, getAnimProps, petList } from '../pet_codex.js'


export default function Pet({ activePet }) {

    return (
        <SpriteAnimator
            sprite={activePet.idle}
            shouldAnimate={activePet.animProps.shouldAnimate}
            frameCount={activePet.animProps.frameCount}
            fps={activePet.animProps.fps}
            width={activePet.animProps.width}
            height={activePet.animProps.height}
        />
    )
}
