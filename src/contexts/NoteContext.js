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

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesContextProvider };
