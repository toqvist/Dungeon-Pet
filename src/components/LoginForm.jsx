import React, { useRef } from 'react'

export default function UserForm({login, register}) {

    let usernameRef = useRef();
    let passwordRef = useRef();

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
            <button onClick={() => {login(usernameRef.current.value, passwordRef.current.value)}}>Login</button>
            <button onClick={() => {register(usernameRef.current.value, passwordRef.current.value)}}>Register</button>
        </div>
    )
}
