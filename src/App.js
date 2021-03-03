import "./App.css";
import { useState } from "react";
import { AddNote } from "./components/AddNote";
import { v4 as uuidv4 } from "uuid";
import { NotesContainer } from "./components/NotesContainer";
import { TagList } from "./components/TagList";

function App() {
	const [notes, setNotes] = useState([
		{
			id: uuidv4(),
			title: "Hello",
			text: "Add a note to get started",
			tag: ["all"],
			color: "white",
			pinned: true,
		},
	]);

	const [tags, setTags] = useState(["personal", "work", "journal", "all"]);

	const [selectedTag, setSelectedTag] = useState("all");

	console.log(selectedTag);

	return (
		<div className="App">
			<AddNote
				notes={notes}
				setNotes={setNotes}
				tags={tags}
				setTags={setTags}
			/>
			<TagList tags={tags} setSelectedTag={setSelectedTag} />
			<NotesContainer notes={notes} selectedTag={selectedTag} />
		</div>
	);
}

export default App;
