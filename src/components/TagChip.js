import "./TagChip.css";

function TagChip({ tagname, note, setNote, cross }) {
	const removeSelected = () => {
		const newArr = note.tag.filter((tag) =>
			tag === tagname ? false : true
		);
		setNote({
			...note,
			tag: newArr,
		});
	};
	return (
		<div className="tag-chip">
			<span>{tagname}</span>
			<button onClick={removeSelected}>{cross}</button>
		</div>
	);
}

export { TagChip };
