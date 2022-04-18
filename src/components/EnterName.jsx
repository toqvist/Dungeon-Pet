import React, { useRef } from 'react'


export default function EnterName({ namePet, modalIsOpen, closeModal }) {

    if (!modalIsOpen) {
        return null
    }

    const petNameRef = useRef();

    function handleKeyPress (e) {
        

        if (e.key === 'Enter') {
            
            if(petNameRef.current.value === '') {
                namePet('default')
            } else {
                namePet(petNameRef.current.value);
            }
            closeModal();
        }
    };


    return (

        <div className='enter-name'>
            <input type="text" 
            ref={petNameRef} 
            onKeyDown={handleKeyPress}
            placeholder='Enter pet name: '
            />
        </div>
    )
}
