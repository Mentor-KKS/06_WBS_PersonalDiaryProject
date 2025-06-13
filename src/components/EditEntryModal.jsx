import { X } from "lucide-react";
import EntryForm from "./EntryForm";

export default function EditEntryModal({
  isOpen,
  entry,
  onClose,
  onUpdateEntry,
  existingDates,
  isDarkMode,
}) {
  if (!isOpen || !entry) return null;

  const handleSubmit = (formData) => {
    const updatedEntry = {
      ...entry,
      ...formData,
    };

    const success = onUpdateEntry(updatedEntry);
    if (success) {
      onClose();
    }
  };

  return (
    <div className="modal modal-open">
      <div
        className={`modal-box w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl ${
          isDarkMode ? "bg-[#53586c] text-white" : "bg-white text-[#333745]"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2
            className="text-2xl font-bold"
            style={{ fontFamily: "Irish Grover, cursive" }}
          >
            Edit Entry
          </h2>
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <EntryForm
          onSubmit={handleSubmit}
          existingDates={existingDates}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
}
