import React, { useState, createContext, useContext } from 'react'
import { LoginContext } from './LoginContext'


export default function Login() {
    const { user, setUser } = useContext(LoginContext)
    const [text, setText] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setText(e.target.value)
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setUser(text)
    }

    return (
        <>
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                    Type in the most recent username:
                    <input onChange={e => handleChange(e)} value={text}></input>
                </label>
            </form>
        </>
    )
}