import { NoteCard } from "./NoteCard";
import "./NotesContainer.css";

function NotesContainer({ notes, selectedTag }) {
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
								// setNotes={setNotes}
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
							// setNotes={setNotes}
						/>
					))}
				</div>
				{/* {notes.map((item) => (
				<NoteCard key={item.id} note={item} />
			))} */}
			</div>
		</div>
	);
}

export { NotesContainer };
