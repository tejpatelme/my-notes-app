import "./TagList.css";

function TagList({ tags, setSelectedTag }) {
	return (
		<div className="tags-dropdown">
			<label htmlFor="sort">Sort by Tags</label>
			<select
				onChange={(event) => setSelectedTag(event.target.value)}
				options={tags}
				name="sort"
				id="sort"
				defaultValue={{ label: "all", value: "all" }}
			>
				{tags.map((item) => (
					<option key={item} label={item} value={item}></option>
				))}
			</select>
		</div>
	);
}

export { TagList };
