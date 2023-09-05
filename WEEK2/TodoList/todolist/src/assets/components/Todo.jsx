import React from 'react'

const Todo = ({todoList,deleteTodo, setTodoList}) => {

    return (
        <div>
            {todoList.map((todo, idx)=><div key={idx}>
                <h4>
                    {/* <label htmlFor={idx} style={{textDecoration:todo.isCompleted?"line-through":"none"}}>{todo.content}</label> */}
                    <span
                    style={
                        todo.isCompleted?
                        {textDecoration :'line-through'}:
                        {textDecoration :'none'}

                    }
                    >{todo.content}</span>
                
                <input type="checkbox" id={idx}
                checked={todo.isCompleted} 
                onChange={(e)=>{
                    const updatedList =  [...todoList]
                    updatedList [idx].isCompleted = !updatedList [idx].isCompleted
                    setTodoList(updatedList)
                }}
                />
                <button style={{backgroundColor:"black", color:"white"}}
                onClick={()=>deleteTodo(idx)}
                >Delete</button>
            </h4>
            </div>)}
        </div>
    )
}

export default Todo