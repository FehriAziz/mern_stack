import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { json } from 'react-router-dom'


const AllPeople = (props) => {
    const [people, setPeople]= useState([])
    useEffect(()=> {
        axios.get("http://localhost:8000/api/people")
        .then(serverResponse =>{
            console.log(serverResponse.data,"👌👌👌")
            setPeople(serverResponse.data)
        })
        .catch(serverError =>console.log(serverError,"XXX"))
    },[])
    return (
        <fieldset>
            <legend> <h2>AllPeople</h2> </legend>
            {people.map(person=> <div key={person._id} style={{backgroundColor:person.isFunny?"cornflowerblue" : "coral"}}>
                <h4> {person.firstName} {person.lastName}</h4>
                <h5>Age : {person.age}</h5>

            </div> )}
        </fieldset>  )
}

export default AllPeople