import { X, Calendar, Edit, Trash2 } from "lucide-react";

export default function ViewEntryModal({
  entry,
  onClose,
  onEdit,
  onDelete,
  isDarkMode,
}) {
  if (!entry) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleEdit = () => {
    onEdit(entry);
    onClose();
  };

  const handleDelete = () => {
    onDelete(entry.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/20  flex items-center justify-center p-4 z-50">
      <div
        className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-box shadow-xl ${
          isDarkMode ? "bg-[#53586c]" : "bg-white"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-base-300">
          <h2
            className={`text-2xl font-bold ${
              isDarkMode ? "text-white" : "text-[#333745]"
            }`}
            style={{ fontFamily: "'Irish Grover', cursive" }}
          >
            {entry.title}
          </h2>

          <div className="flex items-center gap-2">
            <button
              onClick={handleEdit}
              className="btn btn-sm btn-outline btn-success btn-circle"
              title="Edit entry"
            >
              <Edit className="w-4 h-4" />
            </button>

            <button
              onClick={handleDelete}
              className="btn btn-sm btn-outline btn-error btn-circle"
              title="Delete entry"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className={`btn btn-sm btn-circle ${
                isDarkMode ? "btn-neutral" : "btn-outline"
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div
            className={`flex items-center gap-2 text-sm ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>{formatDate(entry.date)}</span>
          </div>

          <div>
            <img
              src={entry.imageUrl || "/placeholder.svg"}
              alt={entry.title}
              className="w-full max-h-96 object-cover rounded-lg"
              onError={(e) => {
                e.target.src =
                  "/placeholder.svg?height=400&width=600&text=Image+Not+Found";
              }}
            />
          </div>

          <div
            className={`prose max-w-none whitespace-pre-wrap ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            <p className="text-lg leading-relaxed">{entry.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
