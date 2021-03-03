import "./NoteCard.css";
import "./AddNote.css";
import { TagChip } from "./TagChip";

function NoteCard({ note }) {
	return (
		<div className={`note-card ${note.color}`}>
			<div className="title">{note.title}</div>
			<div className="text">{note.text}</div>
			<div className="tags">
				{note.tag.map((item) => {
					if (item !== "all")
						return <TagChip key={item} tagname={item} />;
					else return null;
				})}
			</div>
		</div>
	);
}

export { NoteCard };
