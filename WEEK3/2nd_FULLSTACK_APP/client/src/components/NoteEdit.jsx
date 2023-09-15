import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const NoteEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState({ title: '', content: '', isImportant: false });
    const [isLoading, setIsLoading] = useState(true); // Added loading state

    useEffect(() => {
        axios.get(`http://localhost:8000/api/notes/${id}`)
            .then((response) => {
                const { title, content, isImportant } = response.data;
                setNote({ title, content, isImportant });
                setIsLoading(false); // Data has been fetched, set loading to false
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false); // Handle errors and set loading to false
            });
    }, [id]);

    const updateNote = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/notes/${id}`, note);
            navigate(`/notes/`);
        } catch (error) {
            console.error(error);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>; // Display a loading indicator while fetching data
    }

    return (
        <div>
            <h2>Edit Note</h2>
            <form onSubmit={updateNote}>
                <div className="form-group mp-3">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        onChange={(e) => setNote({ ...note, title: e.target.value })}
                        value={note.title}
                        required
                    />
                </div>
                <div className="form-group mp-3">
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        className="form-control"
                        onChange={(e) => setNote({ ...note, content: e.target.value })}
                        value={note.content}
                        required
                    ></textarea>
                </div>
                <div className="form-group mp-3">
                    <label htmlFor="isImportant">Is Important?</label>
                    <input
                        type="checkbox"
                        id="isImportant"
                        className="form-check-input"
                        onChange={(e) => setNote({ ...note, isImportant: e.target.checked })}
                        checked={note.isImportant}
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-outline-primary w-50">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NoteEdit;
