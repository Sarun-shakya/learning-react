import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <h1>React and Sarun</h1>
    </UserContextProvider>
  )
}

export default App
