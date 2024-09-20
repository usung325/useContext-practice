import { useState, useContext } from 'react'
import './App.css'
import { LoginContext } from './components/LoginContext'
import Login from './components/Login'
import Users from './components/Users'

function App() {
  const [user, setUser] = useState('')

  return (
    <>
      <LoginContext.Provider value={{ user, setUser }}>
        <Login />
        <Users />
      </LoginContext.Provider>

    </>
  )
}

export default App
