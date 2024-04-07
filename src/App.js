import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import History from "./pages/History";
import Rules from "./pages/Rules";
import Login from "./pages/Login";
import "./App.css";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/history" element={<History />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
