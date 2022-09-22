import React, { useRef } from 'react'

export default function UserForm({login}) {

    const usernameRef = useRef();
    const passwordRef = useRef();

    return (
        <div>
            <input type="text"
                ref={usernameRef}
                placeholder='Username'
            />
            <input type="text"
                ref={passwordRef}
                placeholder='Password'
            />
            <button onClick={() => {login(usernameRef, passwordRef)}}>Login</button>

        </div>
    )
}
