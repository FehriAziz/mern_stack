import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'

function App() {
  const users =[{first_name:"Jane",last_name:"Doe" , age : 45 , hair: "Black"},
                {first_name: "John", last_name : "Smith" , age : 88 , hair :"Brown"},
                {first_name: "Millard", last_name : "Fillmore" ,age: 50 , hair :"Brown" },
                {first_name: "Maria", last_name : "Smith" , age : 62 ,hair :"Brown"}]

  return (
    <>
      {users.map((u,index)=> <Form key={index} user={u}/>)}
    </>
  )
}

export default App
