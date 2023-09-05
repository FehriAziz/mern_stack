import { useState } from 'react'

import './App.css'
import Todo from './assets/components/Todo'
import Form from './assets/components/Form'



function App() {
  const [todoList, setTodoList] = useState([
    {content :"Get the python ",isCompleted:true},
    {content :"Go to mars ",isCompleted:false},
    {content :"Go to Coding Dojo ",isCompleted:false}
  ]) 
  const deleteTodo = (id) => {
    console.log("Deleted Todo",todoList[id] );
    const filteredTodoList = todoList.filter((todo,idx)=> idx != id)
    setTodoList(filteredTodoList)
  }

  return (
    <>
    <h1>Plan Your Day</h1>
    <Form todoList={todoList} setTodoList={setTodoList}/>
    <Todo todoList={todoList} deleteTodo = {deleteTodo} setTodoList={setTodoList}/>
    </>
  )
}

export default App
