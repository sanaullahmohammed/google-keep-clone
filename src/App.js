import "./App.css";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import { NotesContextProvider } from "./contexts/NoteContext";

function App() {
  return (
    <NotesContextProvider>
      <div className="App">
        <Header />
        <AddNote />
      </div>
    </NotesContextProvider>
  );
}

export default App;
