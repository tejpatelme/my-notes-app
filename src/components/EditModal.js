import "./EditModal.css";
import { EditNote } from "./EditNote";

function EditModal({
  note,
  notes,
  tags,
  setTags,
  setNote,
  setNotes,
  showModal,
  setShowModal,
}) {
  return (
    <div className="edit-modal" onClick={() => setShowModal(false)}>
      <EditNote
        notes={notes}
        setNotes={setNotes}
        tags={tags}
        setTags={setTags}
        note={note}
        setNote={setNote}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export { EditModal };
