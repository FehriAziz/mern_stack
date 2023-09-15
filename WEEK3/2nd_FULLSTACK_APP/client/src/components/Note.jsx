import React from 'react';
import noteStyle from './Note.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Note = ({ note, onDelete }) => {
  if (!note) {
    return null;
  }

  const handleDelete = async () => {
    try {
      // Send a DELETE request to your backend API to delete the note by its ID
      await axios.delete(`http://localhost:8000/api/notes/${note._id}`);
      // Notify the parent component that the note has been deleted
      onDelete(note._id);
    } catch (error) {
      console.error('AxiosError:', error);
      // Handle any errors that may occur during the deletion process
    }
  };

  return (
    <div className={noteStyle.note}>
      <h1>{note.isImportant && "🔔"} {note.title}</h1>
      <p>{note.content}</p>
      <div className='d-flex justify-content-between align-items-center'>
        <p>{note.createdAt}</p>
        <div>
          <button className={noteStyle.button_edit}>
            <Link to={`/notes/${note._id}/edit`}>Edit</Link>
          </button>
          <button className={noteStyle.button_delete} onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Note;
