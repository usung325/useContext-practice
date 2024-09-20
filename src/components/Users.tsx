import React, { useContext } from 'react'
import { LoginContext } from './LoginContext'

export default function Users() {
    const { user, setUser } = useContext(LoginContext)
    return (
        <>
            <div>
                <h1>{user}</h1>
            </div>
        </>
    )
}