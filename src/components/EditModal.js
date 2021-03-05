import "./EditModal.css";
import { EditNote } from "./EditNote";

function EditModal({
  note,
  notes,
  tags,
  setTags,
  setNote,
  setNotes,
  setShowModal,
}) {
  return (
    <div className="edit-modal">
      <EditNote
        notes={notes}
        setNotes={setNotes}
        tags={tags}
        setTags={setTags}
        note={note}
        setNote={setNote}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export { EditModal };
