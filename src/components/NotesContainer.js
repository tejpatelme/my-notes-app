import { NoteCard } from "./NoteCard";
import "./NotesContainer.css";

function NotesContainer({ notes }) {
	return (
		<div className="notes-container">
			{notes.map((item) => (
				<NoteCard key={item.id} note={item} />
			))}
		</div>
	);
}

export { NotesContainer };
