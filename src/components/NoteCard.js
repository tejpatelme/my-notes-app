import "./NoteCard.css";
import "./AddNote.css";
import pin from "../assets/icons/push_pin-24px.svg";
import pinfilled from "../assets/icons/pinfilled.svg";
import remove from "../assets/icons/delete-24px.svg";
import { TagChip } from "./TagChip";

function NoteCard({ note, notes, setNotes }) {
	const changePinned = () => {
		setNotes(
			notes.map((item) =>
				item.id === note.id ? { ...item, pinned: !item.pinned } : item
			)
		);
	};

	const removeNote = () => {
		setNotes(notes.filter((item) => (item.id === note.id ? false : true)));
	};
	return (
		<div className={`note-card ${note.color}`}>
			<div className="title">{note.title}</div>
			<button className="pin-button" onClick={changePinned}>
				{note.pinned ? (
					<img src={pinfilled} alt="pin" />
				) : (
					<img src={pin} alt="pin" />
				)}
			</button>
			<div className="text">{note.text}</div>
			<div className="tags">
				{note.tag.map((item) => {
					if (item !== "all")
						return <TagChip key={item} tagname={item} />;
					else return null;
				})}
			</div>
			<button onClick={removeNote} className="remove-button">
				<img src={remove} alt="remove" />
			</button>
		</div>
	);
}

export { NoteCard };
