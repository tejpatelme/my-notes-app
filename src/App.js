import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EditModal, AddNote, NotesContainer, TagList } from "./components";

function App() {
  const [note, setNote] = useState({
    title: "",
    text: "",
    tag: ["all"],
    color: "white",
    pinned: false,
  });

  const [notes, setNotes] = useState([
    {
      id: uuidv4(),
      title: "Hello",
      text: "Add a note to get started",
      tag: ["all"],
      color: "blue",
      pinned: true,
    },
  ]);

  const [tags, setTags] = useState(["personal", "work", "journal", "all"]);

  const [selectedTag, setSelectedTag] = useState("all");

  const [showModal, setShowModal] = useState(false);

  const [editNoteObj, setEditNoteObj] = useState({
    id: "",
    title: "",
    text: "",
    tag: ["all"],
    color: "white",
    pinned: false,
  });

  const editNote = (noteid) => {
    notes.forEach((item) => {
      if (item.id === noteid) {
        setEditNoteObj({
          id: item.id,
          title: item.title,
          text: item.text,
          tag: item.tag,
          color: item.color,
          pinned: item.pinned,
        });
      }
    });
  };

  // console.log(editNoteObj);

  // console.log(selectedTag);

  return (
    <div className="App">
      <AddNote
        notes={notes}
        setNotes={setNotes}
        tags={tags}
        setTags={setTags}
        note={note}
        setNote={setNote}
      />
      <TagList tags={tags} setSelectedTag={setSelectedTag} />
      <NotesContainer
        notes={notes}
        selectedTag={selectedTag}
        setNotes={setNotes}
        showModal={showModal}
        setShowModal={setShowModal}
        editNote={editNote}
      />
      {showModal && (
        <EditModal
          notes={notes}
          setNotes={setNotes}
          tags={tags}
          setTags={setTags}
          note={editNoteObj}
          setNote={setEditNoteObj}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default App;
