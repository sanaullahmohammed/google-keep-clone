import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const NotesContext = React.createContext();

const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  //apply the save and get functions using useEffect
  //get the saved notes and add them to the array
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);

  //saving data to local storage
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

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
