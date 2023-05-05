import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NotesContext = React.createContext();

const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // addNote function
  const addNote = ({ title, content }) => {
    const newNote = {
      id: uuid(),
      title,
      content,
    };
    setNotes([...notes, newNote]);
  };

  //deleteNote function
  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  // updateNote
  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesContextProvider };
