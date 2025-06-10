export default function WelcomeBox({ onAddEntry, isDarkMode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center pt-20">
      <h1
        className={`text-4xl md:text-5xl font-bold mb-4 ${
          isDarkMode ? "text-white" : "text-[#53586c]"
        }`}
        style={{ fontFamily: "'Irish Grover', cursive" }}
      >
        Welcome to Your Diary
      </h1>

      <p
        className={`text-lg mb-8 max-w-md ${
          isDarkMode ? "text-gray-300" : "text-[#53586c]"
        }`}
      >
        Start your first reflection today.
        <br />
        Every thought, every moment, every feeling
        <br />
        deserves a place in your story.
      </p>

      <div className="relative flex items-center justify-center w-full max-w-2xl">
        <div className="absolute -left-10 md:-left-12 bottom-0 z-10">
          <img
            src="/img/happy_happy.png"
            alt="Happy Monster"
            className="w-36 h-36 md:w-48 md:h-48"
          />
        </div>

        <div
          className={`relative z-20 p-8 rounded-2xl max-w-md w-full mx-auto shadow-lg ${
            isDarkMode ? "bg-white text-[#333745]" : "bg-[#333745] text-white"
          }`}
        >
          <h2
            className="text-xl font-bold mb-4 text-center"
            style={{ fontFamily: "'Irish Grover', cursive" }}
          >
            What you can do:
          </h2>
          <ul className="text-left space-y-2 mb-10 text-sm">
            <li>• Capture your daily thoughts and experiences</li>
            <li>• Add photos to make memories vivid</li>
            <li>• Track your mood and emotional journey</li>
            <li>• Everything stays private on your device</li>
          </ul>
          <button
            onClick={onAddEntry}
            className="bg-[#00d085] hover:bg-[#00b872] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 w-3/4"
          >
            + Write Your first Entry
          </button>
        </div>
      </div>
    </div>
  );
}
