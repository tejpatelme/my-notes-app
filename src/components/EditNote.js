import close from "../assets/icons/close.svg";
import pin from "../assets/icons/pin.svg";
import pinfilled from "../assets/icons/pinfilled.svg";
import palette from "../assets/icons/palette.svg";
import label from "../assets/icons/label.svg";
import { TagChip } from "./TagChip";

function EditNote({
	note,
	setNote,
	notes,
	setNotes,
	tags,
	setTags,
	setShowModal,
}) {
	const colors = ["white", "red", "purple", "yellow", "blue"];

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
			setNotes(
				notes.map((item) => {
					if (item.id === note.id) {
						return {
							...item,
							title: note.title,
							text: note.text,
							tag: note.tag,
							color: note.color,
							pinned: note.pinned,
						};
					} else return item;
				})
			);
			setNote({
				id: "",
				title: "",
				text: "",
				tag: ["all"],
				color: "white",
				pinned: false,
			});
		}
		setShowModal(false);
	};
	return (
		<>
			<div className={`addnote-container edit ${note.color}`}>
				<div className="title-container">
					<input
						type="text"
						value={note.title}
						className="add-title"
						onChange={setTitle}
						placeholder="Title"
					/>
					{console.log(note.pinned)}
					<button
						onClick={() => {
							setShowModal(false);
						}}
					>
						<img src={close} alt="close" />
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
							<img className="icon" src={palette} alt="palette" />
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
							<img className="icon" src={label} alt="label" />
							<ul>
								<li>
									<input
										placeholder="enter a tag"
										type="text"
										onKeyPress={(e) => {
											if (e.key === "Enter") {
												setTags([
													e.target.value,
													...tags,
												]);
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
						<button onClick={setPinnedOrNot}>
							{note.pinned ? (
								<img
									className="icon"
									src={pinfilled}
									alt="pin-filled"
								/>
							) : (
								<img className="icon" src={pin} alt="pin" />
							)}
						</button>
					</div>
					<button onClick={addNoteToList}>EDIT NOTE</button>
				</div>
			</div>
		</>
	);
}

export { EditNote };
