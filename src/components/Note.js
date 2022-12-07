import { useState } from 'react'
import { deleteNote, updateNote } from '../redux/notes/notesSlice';
import { useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import convert from "react-from-dom";
import { marked } from "marked";

export default function Note({ item }) {
    const [editMode, setEditMode] = useState(false);
    const [newContent, setNewContent] = useState(item.content);
    const htmlString = "<div>" + marked.parse(newContent) + "</div>";
    const htmlDescription = convert(htmlString);
    const dispatch = useDispatch();

    const handleEdit = (e) => {
        e.preventDefault();
        setEditMode(true);
    };

    const handleSave = (e) => {
        const editedNote = {
            id: item.id,
            content: newContent,
        };

        updateNote(editedNote);
        setEditMode(false);
    };

    const handleChange = (e) => {
        e.preventDefault();
        setNewContent(e.target.value);
    };

    return (
        <div className='notes_list'>
            <span className="date">{item.date}</span>
            <span className="icons">
                {
                    !editMode ?
                        <button className='note_head_btn' onClick={(e) => handleEdit(e)}>
                            <Icon icon="mdi:pencil-outline" color="#92d788" width="24" height="24" />
                        </button>
                        :
                        <button className='note_head_btn' onClick={(e) => handleSave(e)}>
                            <Icon icon="subway:tick" color="#92d788" width="24" height="24" />
                        </button>
                }
                <button className='note_head_btn' onClick={() => dispatch(deleteNote(item.id))}>
                    <Icon icon="clarity:trash-line" color="#c2474b" width="24" height="24" />
                </button>
            </span>
            <div className='note_text' onClick={(e) => handleEdit(e)}>
                {editMode && (
                    <textarea
                        className="card_body"
                        style={{ width: "100%", height: "100%" }}
                        value={newContent}
                        onChange={(e) => handleChange(e)}
                    ></textarea>
                )}

                {!editMode && (
                    <div className="card_body">{htmlDescription}</div>
                )}
            </div>
        </div>
    )
}
