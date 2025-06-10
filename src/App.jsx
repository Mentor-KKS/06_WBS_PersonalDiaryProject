import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddEntryModal from "./components/AddEntryModal";
import ViewEntryModal from "./components/ViewEntryModal";
import EditEntryModal from "./components/EditEntryModal";
import EntryList from "./components/EntryList";
import WelcomeBox from "./components/WelcomeBox";

function App() {
  const [entries, setEntries] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewEntry, setViewEntry] = useState(null);
  const [editEntry, setEditEntry] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedEntries = localStorage.getItem("diary-entries");
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }

    const savedTheme = localStorage.getItem("diary-theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("diary-entries", JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    localStorage.setItem("diary-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const addEntry = (entryData) => {
    const existingEntry = entries.find(
      (entry) => entry.date === entryData.date
    );
    if (existingEntry) {
      alert("An entry for this date already exists!");
      return false;
    }

    const newEntry = {
      ...entryData,
      id: Date.now().toString(),
      createdAt: Date.now(),
    };

    setEntries((prev) =>
      [newEntry, ...prev].sort((a, b) => b.createdAt - a.createdAt)
    );
    return true;
  };

  const updateEntry = (updatedEntry) => {
    const existingEntry = entries.find(
      (entry) =>
        entry.date === updatedEntry.date && entry.id !== updatedEntry.id
    );
    if (existingEntry) {
      alert("An entry for this date already exists!");
      return false;
    }

    setEntries((prev) =>
      prev
        .map((entry) => (entry.id === updatedEntry.id ? updatedEntry : entry))
        .sort((a, b) => b.createdAt - a.createdAt)
    );
    return true;
  };

  const deleteEntry = (entryId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this entry? This action cannot be undone."
      )
    ) {
      setEntries((prev) => prev.filter((entry) => entry.id !== entryId));
    }
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-[#333745] text-white" : "bg-gray-100 text-[#333745]"
      }`}
    >
      <Header
        onAddEntry={() => setIsAddModalOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
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
        existingDates={entries.map((entry) => entry.date)}
        isDarkMode={isDarkMode}
      />

      <EditEntryModal
        isOpen={!!editEntry}
        entry={editEntry}
        onClose={() => setEditEntry(null)}
        onUpdateEntry={updateEntry}
        existingDates={entries.map((entry) => entry.date)}
        isDarkMode={isDarkMode}
      />

      <ViewEntryModal
        entry={viewEntry}
        onClose={() => setViewEntry(null)}
        onEdit={setEditEntry}
        onDelete={deleteEntry}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;
