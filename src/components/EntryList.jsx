import EntryCard from "./EntryCard";

export default function EntryList({
  entries,
  onViewEntry,
  onEditEntry,
  onDeleteEntry,
  isDarkMode,
}) {
  return (
    <div>
      <h2
        className={`text-3xl font-bold mb-8 text-center ${
          isDarkMode ? "text-white" : "text-[#53586c]"
        }`}
        style={{
          fontFamily: "Irish Grover, Apple Chancery, cursive",
        }}
      >
        Your Diary Entries
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {entries.map((entry) => (
          <EntryCard
            key={entry.id}
            entry={entry}
            onClick={() => onViewEntry(entry)}
            onEdit={() => onEditEntry(entry)}
            onDelete={() => onDeleteEntry(entry.id)}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </div>
  );
}
