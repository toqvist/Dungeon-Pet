import React from 'react'
import { useState, useEffect } from 'react'

export default function needBar({ need, needMax, icon }) {

    const [notches, setNotches] = useState([]);

    useEffect(() => {
        fillBar();
    }, [])

    function fillBar() {
        let newNotches = []

        for (let i = 0; i < need; i++) {
            newNotches.push(<span className="notch" key={i}></span>)
        }

        for (let i = need; i < needMax; i++) {
            newNotches.push(<span className="notch-transparent" key={i}></span>)
        }
        setNotches(newNotches)
    }

    return (
        <>
            <div className='need-bar'>
                <span className='need-icon'>{icon}</span>
                {notches.map((notch, index) => {
                    return notch
                })}
            </div>
        </>

    )
}
