import "./TagChip.css";

function TagChip({ tagname }) {
	return (
		<div className="tag-chip">
			<span>{tagname}</span>
			<button>x</button>
		</div>
	);
}

export { TagChip };
