import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import History from "./pages/History";
import Rules from "./pages/Rules";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Game />} />
          <Route path="/game" element={<Game />} />
          <Route path="/history" element={<History />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
