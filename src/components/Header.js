import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../redux/notes/notesSlice';

export default function Header() {
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const handleAddNote = () => {
        dispatch(addNote({
            id: Date.now(),
            content: content,
            date: new Date().toLocaleString()
        }))
        setContent('');
    }
    return (
        <div className='header'>
            <h1>ReactJS Markdown Notes</h1>
            <button onClick={handleAddNote}>
                <svg width="30px" height="30px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M6 12h6m6 0h-6m0 0V6m0 6v6" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>
        </div>
    )
}
