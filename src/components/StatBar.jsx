import React from 'react'

export default function StatBar(stat, statMax) {

    let notches = [];
    function fillBar() {
        for (let i = 0; i < statMax; i++) {
            notches.push(<span className="notch"></span>)
        }
    }

    return (
        <div className='stat-bar'>
            {notches.map((notch, index) => {
                return notch
            })}
        </div>

    )
}
