import { Calendar, Pencil, Trash2 } from "lucide-react";

export default function EntryCard({
  entry,
  onClick,
  onEdit,
  onDelete,
  isDarkMode,
}) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      className={`cursor-pointer rounded-box overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] ${
        isDarkMode
          ? "bg-[#53586c] hover:bg-gray-600"
          : "bg-white hover:bg-gray-100"
      }`}
    >
      <div className="aspect-video overflow-hidden" onClick={onClick}>
        <img
          src={entry.imageUrl || "/placeholder.svg"}
          alt={entry.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              "/placeholder.svg?height=200&width=300&text=Image+Not+Found";
          }}
        />
      </div>

      <div className="p-4 space-y-3">
        <div
          className={`flex items-center gap-2 text-sm ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>{formatDate(entry.date)}</span>
        </div>

        <h3
          className={`text-xl font-bold line-clamp-2 ${
            isDarkMode ? "text-white" : "text-[#53586c]"
          }`}
          style={{ fontFamily: "'Irish Grover', cursive" }}
        >
          {entry.title}
        </h3>

        <p
          className={`text-sm line-clamp-3 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {entry.content}
        </p>

        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
            className="btn btn-sm btn-outline btn-primary"
          >
            <Pencil className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="btn btn-sm btn-outline btn-error"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
