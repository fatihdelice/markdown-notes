import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: [],
    },
    reducers: {
        addNote: {
            reducer(state, action) {
                state.items.push(action.payload);
            }
        },
        deleteNote: {
            reducer(state, action) {
                state.items = state.items.filter((item) => item.id !== action.payload);
            }
        },
        updateNote: {
            reducer(state, action) {
                const { id, content } = action.payload;
                const existingNote = state.items.find((item) => item.id === id);
                if (existingNote) {
                    existingNote.content = content;
                }
            }
        }
    },
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;
export default notesSlice.reducer;