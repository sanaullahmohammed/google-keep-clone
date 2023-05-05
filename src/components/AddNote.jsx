import AddIcon from "@mui/icons-material/Add";
import { useState, useContext } from "react";
import { NotesContext } from "../contexts/NoteContext";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isExpanded, setExpanded] = useState(false);
  const { addNote } = useContext(NotesContext);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleExpanded = () => {
    setExpanded(true);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (title.trim() !== "" && content.trim() !== "") {
      addNote({
        title: title,
        content: content,
      });
      setTitle("");
      setContent("");
      setExpanded(false);
    }
  };

  return (
    <form className="add-note-form" onSubmit={handleAdd}>
      {isExpanded && (
        <input
          type="text"
          placeholder="Title"
          value={title}
          name="title"
          onChange={handleTitleChange}
        />
      )}
      <textarea
        placeholder="Take a note..."
        value={content}
        onClick={handleExpanded}
        name="content"
        onChange={handleContentChange}
        rows={isExpanded ? 3 : 1}
      />
      <button type="submit">
        <AddIcon sx={{ backgroundColor: "#FFC812" }} />
      </button>
    </form>
  );
};

export default AddNote;
