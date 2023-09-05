//rafce
import React from 'react'

const Form = (props) => {

  return (
    <>
        <h2>{props.user.first_name} {props.user.last_name}</h2>
        <p> Age :  {props.user.age} </p>
        <p>Hair color : {props.user.hair}</p>
    </>
  )
}

export default Form