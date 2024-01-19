import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import History from "./pages/History";
import Rules from "./pages/Rules";
import "./App.css";
import NotFound from "./pages/NotFound";
import { GameAttemptsProvider } from "./components/GameAttemptsContext";

function App() {
  return (
    <div>
      <GameAttemptsProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Game />} />
          <Route path="/game" element={<Game />} />
          <Route path="/history" element={<History />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </GameAttemptsProvider>
    </div>
  );
}

export default App;
