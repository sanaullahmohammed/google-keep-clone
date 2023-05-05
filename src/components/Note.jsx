import React, { useState, useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { NotesContext } from "../contexts/NoteContext";

const Note = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(note.title);
  const [updatedContent, setUpdatedContent] = useState(note.content);

  const { deleteNote, updateNote } = useContext(NotesContext);

  // Delete button
  const handleDeleteNote = () => {
    deleteNote(note.id);
  };

  // Edit button
  const handleEditNote = () => {
    setIsEditing(true);
  };

  // Cancel button after clicking on Edit
  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedTitle(note.title);
    setUpdatedContent(note.content);
  };

  // Save button after clicking on Edit
  const handleSaveEdit = () => {
    updateNote({
      id: note.id,
      title: updatedTitle,
      content: updatedContent,
    });
    setIsEditing(false);
  };

  // Title Change
  const handleTitleChange = (event) => {
    setUpdatedTitle(event.target.value);
  };

  // Content Change
  const handleContentChange = (event) => {
    setUpdatedContent(event.target.value);
  };

  return (
    <div className="note">
      {isEditing ? (
        <>
          <div className="note-edit-form">
            <input value={updatedTitle} onChange={handleTitleChange} />
            <textarea value={updatedContent} onChange={handleContentChange} />
          </div>
          <div className="note-buttons">
            <button onClick={handleSaveEdit}>
              <SaveIcon />
            </button>
            <button onClick={handleCancelEdit}>
              <CancelIcon />
            </button>
          </div>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <div className="note-buttons">
            <button onClick={handleEditNote}>
              <EditIcon />
            </button>
            <button onClick={handleDeleteNote}>
              <DeleteIcon />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Note;
