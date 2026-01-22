import { Route, Routes } from "react-router-dom";
import "./App.css";
import PlayGame from "./components/pages/PlayGame";
import StartGame from "./components/pages/StartGame";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/play" element={<PlayGame />} />
        <Route path="/start" element={<StartGame />} />
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </div>
  );
}

export default App;
