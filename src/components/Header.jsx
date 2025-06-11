import { Moon, Sun } from "lucide-react";

export default function Header({ onAddEntry, isDarkMode, onToggleTheme }) {
  return (
    <header className="transition-colors">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <h1
            className="text-4xl md:text-4xl font-bold "
            style={{
              fontFamily: "Irish Grover, Apple Chancery, cursive",
            }}
          >
            Monstary
          </h1>
          <p className="text-sm text-base-content">Your personal space</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="btn btn-circle bg-neutral-700  text-white hover:bg-neutral-focus"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          <button
            onClick={onAddEntry}
            className="btn btn-success text-white px-5 py-2 rounded-full font-semibold text-sm md:text-base"
          >
            + Add Entry
          </button>
        </div>
      </div>

      <div className="h-[3px] w-11/12 bg-base-content mx-auto mt-1 rounded-full opacity-70" />
    </header>
  );
}
