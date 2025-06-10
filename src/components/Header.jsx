import { Moon, Sun } from "lucide-react";

export default function Header({ onAddEntry, isDarkMode, onToggleTheme }) {
  return (
    <header
      className={`transition-colors duration-300 ${
        isDarkMode ? "bg-[#333745]" : "bg-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <h1
            className={`text-4xl md:text-4xl font-bold ${
              isDarkMode ? "text-white" : "text-[#333745]"
            }`}
            style={{
              fontFamily: "Irish Grover, Apple Chancery, cursive",
            }}
          >
            Monstary
          </h1>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-300" : "text-[#333745]"
            }`}
          >
            Your personal space
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full bg-gray-600 hover:bg-gray-500 text-white transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={onAddEntry}
            className="bg-[#00d085] hover:bg-[#00b872] text-white px-5 py-2 rounded-full font-semibold transition-colors duration-200 text-sm md:text-base"
          >
            + Add Entry
          </button>
        </div>
      </div>
      <div
        className={`h-[3px] w-8/9 transition-colors text-center m-auto duration-300 ${
          isDarkMode ? "bg-white" : "bg-[#333745]"
        }`}
      />
    </header>
  );
}
