import { useContext } from "react";
import Note from "./Note";
import { NotesContext } from "../contexts/NoteContext";

const NotesContainer = () => {
  const { notes } = useContext(NotesContext);

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesContainer;
