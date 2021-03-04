import { NoteCard } from "./NoteCard";
import "./NotesContainer.css";

function NotesContainer({
	notes,
	selectedTag,
	setNotes,
	showModal,
	setShowModal,
	editNote,
}) {
	const filteredArr = notes.filter((item) => {
		if (selectedTag === "all") {
			return true;
		} else if (
			selectedTag === item.tag.find((item) => item === selectedTag)
		) {
			return true;
		} else return false;
	});
	const pinnedNotes = filteredArr.filter((item) => item.pinned);
	const otherNotes = filteredArr.filter((item) =>
		item.pinned ? false : true
	);
	console.log(pinnedNotes.length);
	return (
		<div className="notes-container">
			{pinnedNotes.length >= 1 && (
				<div className="pinned-notes">
					<h5>PINNED</h5>
					<div className="pinned-notes-container">
						{pinnedNotes.map((item) => (
							<NoteCard
								key={item.id}
								notes={notes}
								note={item}
								setNotes={setNotes}
								showModal={showModal}
								setShowModal={setShowModal}
								editNote={editNote}
							/>
						))}
					</div>
				</div>
			)}
			<div className="other-notes">
				{pinnedNotes.length > 0 && otherNotes.length >= 1 && (
					<h5>OTHER</h5>
				)}
				<div className="other-notes-container">
					{otherNotes.map((item) => (
						<NoteCard
							key={item.id}
							notes={notes}
							note={item}
							setNotes={setNotes}
							showModal={showModal}
							setShowModal={setShowModal}
							editNote={editNote}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export { NotesContainer };
