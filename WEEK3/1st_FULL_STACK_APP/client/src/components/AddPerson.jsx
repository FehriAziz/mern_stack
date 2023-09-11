import React , {useState} from 'react'
import { json } from 'react-router-dom'
import axios from 'axios'


const AddPerson = (props) => {
    const [person , setPerson] = useState({firstName :"" ,lastName : "", age:1 ,isFunny:true})
    const fromHandler =(e)=> {
        e.preventDefault()
        console.log("SUBMITTED PERSON" , person);
        axios.post("http://localhost:8000/api/people" , person)
        .then(serverResponse => console.log(serverResponse))
        .catch(serverError => console.log(serverError))
    setPerson ({firstName :"" ,lastName : "", age:1 ,isFunny:true})
    }
    
    return (
        <fieldset>
            <legend><h2>AddPerson</h2></legend>
            <h4>
                Person from state {JSON.stringify(person)}
            </h4>
            <form onSubmit={fromHandler}>
                <p>First Name : <input type="text"
                onChange={(e)=>setPerson({...person , firstName:e.target.value})}
                value={person.firstName}
                /></p>
                <p>Last Name : <input type="text"
                onChange={(e)=>setPerson({...person , lastName:e.target.value})}
                value={person.lastName}
                /></p>
                <p>Age :<input type="number" 
                onChange={(e)=>setPerson({...person , age:e.target.value})}
                value={person.age}
                /></p>
                <p>is Funny : <input type="checkbox" 
                onChange={(e)=>setPerson({...person , isFunny:e.target.checked})} 
                checked={person.isFunny}               
                /></p>
                <button> submit </button>
            </form>
        </fieldset>

    )
}

export default AddPerson