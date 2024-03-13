import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import History from "./pages/History";
import Rules from "./pages/Rules";
import Login from "./pages/Login";
import "./App.css";
import NotFound from "./pages/NotFound";
import { GameAttemptsProvider } from "./components/GameAttemptsContext";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <GameAttemptsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/history" element={<History />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GameAttemptsProvider>
    </div>
  );
}

export default App;
