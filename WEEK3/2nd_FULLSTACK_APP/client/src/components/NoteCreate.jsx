import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NoteCreate = () => {
    const navigate = useNavigate();
    const [note, setNote] = useState({ title: '', content: '', isImportant: false });
    const [errors, setErrors] = useState({ title: '', content: '', backend: '' }); // State for errors

    const createNote = async (e) => {
        e.preventDefault();

        // Check for empty title and content
        if (!note.title) {
            setErrors({ ...errors, title: 'Title is required' });
            return;
        }
        if (!note.content) {
            setErrors({ ...errors, content: 'Content is required' });
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/notes/', note);
            console.log(response.data);
            navigate('/notes/new');
        } catch (error) {
            if (error.response && error.response.data) {
                const { message } = error.response.data;
                setErrors({ ...errors, backend: message });
            } else {
                console.error(error);
                setErrors({ ...errors, backend: 'An error occurred on the backend.' });
            }
        }
    };

    return (
        <div>
            <form onSubmit={createNote}>
                <div className="form-group mp-3">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        onChange={(e) => {
                            setNote({ ...note, title: e.target.value });
                            setErrors({ ...errors, title: '' });
                        }}
                        value={note.title}
                        required
                    />
                    {errors.title && <p className="text-danger">{errors.title}</p>}
                </div>
                <div className="form-group mp-3">
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        className="form-control"
                        onChange={(e) => {
                            setNote({ ...note, content: e.target.value });
                            setErrors({ ...errors, content: '' });
                        }}
                        value={note.content}
                        required
                    ></textarea>
                    {errors.content && <p className="text-danger">{errors.content}</p>}
                </div>
                <div className="form-group mp-3">
                    <label htmlFor="isImportant">Is Important?</label>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        onChange={(e) => setNote({ ...note, isImportant: e.target.checked })}
                        checked={note.isImportant}
                    />
                </div>
                {errors.backend && <p className="text-danger">{errors.backend}</p>}
                <div className="text-center">
                    <button type="submit" className="btn btn-outline-primary w-50">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NoteCreate;
