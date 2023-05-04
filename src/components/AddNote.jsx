import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isExpanded, setExpanded] = useState(false);

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
    // add code
  };

  return (
    <form className="add-note-form">
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
