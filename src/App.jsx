import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddEntryModal from "./components/AddEntryModal";
import ViewEntryModal from "./components/ViewEntryModal";
import EditEntryModal from "./components/EditEntryModal";
import EntryList from "./components/EntryList";
import WelcomeBox from "./components/WelcomeBox";

function App() {
  const [entries, setEntries] = useState(() => {
    try {
      const stored = localStorage.getItem("diary-entries");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("diary-theme") === "dark";
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewEntry, setViewEntry] = useState(null);
  const [editEntry, setEditEntry] = useState(null);

  useEffect(() => {
    localStorage.setItem("diary-entries", JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    localStorage.setItem("diary-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const addEntry = (entryData) => {
    const exists = entries.some((entry) => entry.date === entryData.date);
    if (exists) {
      alert("Oops! You've already written something for this date.");
      return false;
    }

    const newEntry = {
      ...entryData,
      id: Date.now().toString(),
      createdAt: Date.now(),
    };

    setEntries((prev) => [newEntry, ...prev]);
    return true;
  };

  const updateEntry = (updated) => {
    const conflict = entries.find(
      (entry) => entry.date === updated.date && entry.id !== updated.id
    );
    if (conflict) {
      alert("Oops! You've already written something for this date.");
      return false;
    }

    setEntries((prev) => prev.map((e) => (e.id === updated.id ? updated : e)));
    return true;
  };

  const deleteEntry = (id) => {
    if (
      confirm(
        "Do you really want to delete this entry forever? Once deleted, this entry can’t be recovered."
      )
    ) {
      setEntries((prev) => prev.filter((e) => e.id !== id));
    }
  };

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div data-theme={isDarkMode ? "dark" : "light"} className="min-h-screen">
      <Header
        onAddEntry={() => setIsAddModalOpen(true)}
        onToggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />

      <main className="container mx-auto px-4 py-8">
        {entries.length === 0 ? (
          <WelcomeBox
            onAddEntry={() => setIsAddModalOpen(true)}
            isDarkMode={isDarkMode}
          />
        ) : (
          <EntryList
            entries={entries}
            onViewEntry={setViewEntry}
            onEditEntry={setEditEntry}
            onDeleteEntry={deleteEntry}
            isDarkMode={isDarkMode}
          />
        )}
      </main>

      <AddEntryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddEntry={addEntry}
        existingDates={entries.map((e) => e.date)}
        isDarkMode={isDarkMode}
      />

      <EditEntryModal
        isOpen={!!editEntry}
        entry={editEntry}
        onClose={() => setEditEntry(null)}
        onUpdateEntry={updateEntry}
        existingDates={entries.map((e) => e.date)}
      />

      <ViewEntryModal
        entry={viewEntry}
        onClose={() => setViewEntry(null)}
        onEdit={setEditEntry}
        onDelete={deleteEntry}
      />
    </div>
  );
}

export default App;
