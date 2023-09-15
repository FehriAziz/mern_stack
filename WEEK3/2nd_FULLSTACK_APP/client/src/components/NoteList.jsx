import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './Note'
const NoteList = () => {
    const [notes, setNotes] = useState([])
    useEffect(() => { 
        axios.get('http://localhost:8000/api/notes')
        .then (serverResponse => {
            console.log("SERVER RESPONSE : ", serverResponse);
            setNotes (serverResponse.data)
        })
        .catch(serverError => {
            console.log("SERVER ERROR  :" , serverError);
        })
    }, [])
    return (
        <div>
            {/* <h2>{JSON.stringify(notes)} </h2> */}
            {notes.map(note=> <Note key={note._id} note={note}/>)}
            {/* <Note /> */}
        </div>
    )
}

export default NoteList