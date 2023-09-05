import React , {useState} from 'react'

const Form = ({todoList,setTodoList}) => {
    const [todo,setTodo] = useState({content:"",isCompleted:false})
    const createTodo =(e)=>{
        e.preventDefault()
        setTodoList([...todoList,todo])
        setTodo({content:"",isCompleted:false})
    }
    return (
        <div>
            <form onSubmit={createTodo}>
                <input
                onChange={(e)=>{
                    console.log(todo);
                    setTodo({...todo,content:e.target.value})
                }}
                value={todo.content}
                />
                <br />
                <button style={{backgroundColor:"blue",color:"white"}}>Add</button>
            </form>




        </div>
    ) 
}

export default Form