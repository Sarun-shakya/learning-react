import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/card'

function App() {
  let myObj = {
    username: "John",
    age: 18
  }

  let myArr = [1, 2, 3, 4];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Props and Tailwind</h1>
    <Card name="John Doe" details="This is details 1" myNum={myArr}/>
      <Card name="Mary Moe" details="This is details 2" />
    </>
  )
}

export default App
