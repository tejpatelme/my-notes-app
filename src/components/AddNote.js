import { useState } from "react";
import "./AddNote.css";
import { TagChip } from "./TagChip";
import { v4 as uuidv4 } from "uuid";

function AddNote({ notes, setNotes }) {
	const [note, setNote] = useState({
		title: "",
		text: "",
		tag: ["all"],
		color: "white",
		pinned: false,
	});
	console.log(notes);
	const colors = ["white", "red", "purple", "yellow", "blue"];

	const [tags, setTags] = useState(["personal", "work", "journal", "all"]);

	const setTitle = (event) => setNote({ ...note, title: event.target.value });

	const setText = (event) => setNote({ ...note, text: event.target.value });

	const setTag = (item) => {
		const match = note.tag.find((tag) => tag === item);
		if (match) {
			return;
		} else {
			setNote({
				...note,
				tag: [item, ...note.tag],
			});
		}
	};

	const setPinnedOrNot = () => setNote({ ...note, pinned: !note.pinned });

	const setColor = (color) => setNote({ ...note, color: color });

	const addNoteToList = () => {
		console.log(note);
		if (note.title !== "" || note.text !== "") {
			setNotes([
				{
					id: uuidv4(),
					title: note.title,
					text: note.text,
					tag: note.tag,
					color: note.color,
					pinned: false,
				},
				...notes,
			]);
			setNote({
				title: "",
				text: "",
				tag: ["all"],
				color: "white",
				pinned: false,
			});
		}
	};

	return (
		<div className={`addnote-container ${note.color}`}>
			<div className="title-container">
				<input
					type="text"
					value={note.title}
					className="add-title"
					onChange={setTitle}
					placeholder="Title"
				/>
				{console.log(note.pinned)}
				<button onClick={setPinnedOrNot}>
					{note.pinned ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							enable-background="new 0 0 24 24"
							height="24"
							viewBox="0 0 24 24"
							width="24"
						>
							<g>
								<rect fill="none" height="24" width="24" />
							</g>
							<g>
								<path
									d="M16,9V4l1,0c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H7C6.45,2,6,2.45,6,3v0 c0,0.55,0.45,1,1,1l1,0v5c0,1.66-1.34,3-3,3h0v2h5.97v7l1,1l1-1v-7H19v-2h0C17.34,12,16,10.66,16,9z"
									fill-rule="evenodd"
								/>
							</g>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							enable-background="new 0 0 24 24"
							height="24"
							viewBox="0 0 24 24"
							width="24"
						>
							<g>
								<rect fill="none" height="24" width="24" />
							</g>
							<g>
								<path d="M14,4v5c0,1.12,0.37,2.16,1,3H9c0.65-0.86,1-1.9,1-3V4H14 M17,2H7C6.45,2,6,2.45,6,3c0,0.55,0.45,1,1,1c0,0,0,0,0,0l1,0v5 c0,1.66-1.34,3-3,3v2h5.97v7l1,1l1-1v-7H19v-2c0,0,0,0,0,0c-1.66,0-3-1.34-3-3V4l1,0c0,0,0,0,0,0c0.55,0,1-0.45,1-1 C18,2.45,17.55,2,17,2L17,2z" />
							</g>
						</svg>
					)}
				</button>
			</div>
			<textarea
				value={note.text}
				onChange={setText}
				className="addtext"
				placeholder="Enter a note..."
			></textarea>
			{note.tag.length > 1 && (
				<div className="tag-holder">
					{note.tag.map((item) => {
						if (item !== "all")
							return (
								<TagChip
									key={item}
									tagname={item}
									note={note}
									setNote={setNote}
									cross="x"
								/>
							);
						else return null;
					})}
				</div>
			)}
			<div className="note-controls">
				<div className="customize-note">
					<div className="color-picker">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
						</svg>
						<div className="palette">
							{colors.map((item) => (
								<div
									key={item}
									onClick={() => {
										setColor(item);
									}}
									style={
										item === note.color
											? { border: "1px solid black" }
											: { border: "none" }
									}
									className={`color-option ${item}`}
								></div>
							))}
						</div>
					</div>
					<div className="label-selector">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 0 24 24"
							width="24"
						>
							<path d="M0 0h24v24H0z" fill="none" />
							<path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z" />
						</svg>
						<ul>
							<li>
								<input
									placeholder="enter a tag"
									type="text"
									onKeyPress={(e) => {
										if (e.key === "Enter") {
											setTags([e.target.value, ...tags]);
											e.target.value = "";
										}
									}}
								/>
							</li>
							{tags.map((item) => {
								if (item === "all") return null;
								else
									return (
										<li
											key={item}
											onClick={() => setTag(item)}
										>
											{item}
										</li>
									);
							})}
						</ul>
					</div>
				</div>
				<button onClick={addNoteToList}>ADD NOTE</button>
			</div>
		</div>
	);
}

export { AddNote };
