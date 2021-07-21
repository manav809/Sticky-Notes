
import { nanoid } from "nanoid";
import { useState } from "react";
import NotesList from "./components/NotesList";

const App = () => {
  const[notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is 1st note",
    date: "15/04/2021"
    },
    {
      id: nanoid(),
      text: "This is 2nt note",
      date: "15/04/2023"
    },
    {
      id: nanoid(),
      text: "This is 3rd note",
      date: "15/04/2022"
    },

  ]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid,
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNote);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <NotesList 
        notes = {notes} 
        handleAddNote = {addNote}
        handleDeleteNote = {deleteNote}
      />
    </div>
  );
};

export default App;
