import React from 'react'
import { useSelector } from 'react-redux';
import Note from './Note';




export default function NotesList() {
    const items = useSelector((state) => state.notes.items);

    return (
        <div className="flex">
            {
                items.map((item) => (
                    <Note item={item} key={item.id} />
                ))
            }
        </div>
    )
}
