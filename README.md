# 📝 Personal Diary

A simple and interactive diary application built with **React**, **Vite**, and **TailwindCSS**.

Users can create daily entries, view them as cards, and open full details in a modal. Each entry is validated, limited to **one per day**, and persisted in **localStorage**. This project is designed to practice modern React skills, state/effect management, and clean UI development.

---

## ✨ Features

- ➕ **Add diary entries** (Title, Date, Image URL, Content) via a modal form
- 🚫 **One entry per day**: prevents duplicate dates
- ✅ **Form validation**: all fields are required
- 💾 **Persistence**: entries are stored in `localStorage`
- 🖼️ **Card layout**: each entry shows image, date, and title
- 🔍 **Detail view modal**: click a card to view full entry
- ⬆️ **Newest-first sorting**: recent entries appear at the top
- 📱 **Responsive design**, styled with **TailwindCSS**

---

## 🚀 Demo

> **Deployed on Render**: _coming soon_

---

## 🗂️ Project Structure

```text
src/
│
├── components/
│ ├── Header.jsx
│ ├── AddEntryModal.jsx
│ ├── EntryForm.jsx
│ ├── EntryList.jsx
│ ├── EntryCard.jsx
│ ├── ViewEntryModal.jsx
│ └── EntryDetails.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

### 📝 Project Requirements

| ID    | Functional Requirement           | Description                                                                                  |
| ----- | -------------------------------- | -------------------------------------------------------------------------------------------- |
| FR001 | Public GitHub Repository         | Store all code in a single public repo; do not add instructors as collaborators.             |
| FR002 | Incremental Development with PRs | Merge every change into main via Pull Requests.                                              |
| FR003 | React + Vite Setup               | Scaffold the app with Vite and use React as the UI framework.                                |
| FR004 | TailwindCSS via npm              | Install Tailwind through npm and configure it with Vite.                                     |
| FR005 | State & Effects Management       | Use React hooks (`useState`, `useEffect`, etc.) appropriately for UI state and side-effects. |
| FR006 | Add Entry Button                 | Provide an “Add Entry” button that opens an entry-creation modal.                            |
| FR007 | Add Entry Form Fields            | Form must collect Title, Date, Image URL, Content.                                           |
| FR008 | LocalStorage Persistence         | Store diary entries as an array in `localStorage`.                                           |
| FR009 | One-Entry-Per-Day Check          | If an entry already exists for the selected day, prompt the user to come back the next day.  |
| FR010 | Form Validation                  | Block submission unless all fields are populated.                                            |
| FR011 | Homepage List                    | Display diary entries sorted newest-first.                                                   |
| FR012 | Load Entries on Startup          | Read and render stored entries when the app first mounts.                                    |
| FR013 | Card Layout                      | Show each entry as a card with preview image, date and title.                                |
| FR014 | Entry Detail Modal               | Clicking a card opens a modal showing full entry (title, date, image, content).              |
| FR015 | Static-Site Deployment to Render | Build the app with Vite and deploy the static assets on Render.                              |

## ✅ Requirements Checklist

- [x] React + Vite Setup
- [x] TailwindCSS styling
- [x] State and effect management with React hooks
- [x] Add Entry button with modal
- [x] Form with validation (title, date, image URL, content)
- [x] One-entry-per-day restriction
- [x] Save/load entries from `localStorage`
- [x] Card layout with newest-first sorting
- [x] Detail modal for full entry view
- [x] Static site-ready for Render

---

## 🧠 Planning & Component Structure

**Suggested component tree:**

```text
App
├── Header
│ └── AddEntryButton
├── EntryList
│ └── EntryCard (repeated)
├── AddEntryModal
│ └── EntryForm
└── ViewEntryModal
└── EntryDetails
```

---

### Responsibilities:

- **App**: Owns global state (entries, selected entry, modal visibility)
- **Header**: Contains title and add button
- **EntryList**: Maps entries to cards
- **EntryCard**: Displays entry preview (image, title, date)
- **AddEntryModal**: Handles modal form logic
- **EntryForm**: Handles input and validation
- **ViewEntryModal**: Shows full entry details

## 🛠️ Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## 👨‍💻 Author

- **Mentor KKS** – [GitHub Profile](https://github.com/Mentor-KKS)
