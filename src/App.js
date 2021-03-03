import "./App.css";
import { useState } from "react";
import { AddNote } from "./components/AddNote";
import { v4 as uuidv4 } from "uuid";
import { NotesContainer } from "./components/NotesContainer";

function App() {
	const [notes, setNotes] = useState([
		{
			id: uuidv4(),
			title: "Hello4",
			text: "Add a note to get started",
			tag: ["all"],
			color: "white",
			pinned: true,
		},
	]);

	return (
		<div className="App">
			<AddNote notes={notes} setNotes={setNotes} />
			<NotesContainer notes={notes} />
		</div>
	);
}

export default App;
