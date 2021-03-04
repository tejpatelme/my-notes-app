import "./NoteCard.css";
import "./AddNote.css";
import pin from "../assets/icons/pin.svg";
import pinfilled from "../assets/icons/pinfilled.svg";
import remove from "../assets/icons/delete.svg";
import edit from "../assets/icons/edit.svg";
import { TagChip } from "./TagChip";

function NoteCard({
	note,
	notes,
	setNotes,
	showModal,
	setShowModal,
	editNote,
}) {
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
					<img className="icon" src={pinfilled} alt="pinfilled" />
				) : (
					<img className="icon" src={pin} alt="pin" />
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
			<div className="note-buttons">
				<button
					onClick={() => {
						setShowModal(!showModal);
						editNote(note.id);
					}}
				>
					<img className="icon" src={edit} alt="edit" />
				</button>
				<button onClick={removeNote} className="icon">
					<img className="icon" src={remove} alt="remove" />
				</button>
			</div>
		</div>
	);
}

export { NoteCard };
