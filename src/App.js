import "./App.css";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import { NotesContextProvider } from "./contexts/NoteContext";
import NotesContainer from "./components/NotesContainer";

function App() {
  return (
    <NotesContextProvider>
      <div className="App">
        <Header />
        <AddNote />
        <NotesContainer />
      </div>
    </NotesContextProvider>
  );
}

export default App;
