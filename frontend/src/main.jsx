import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Temas from "./pages/Temas";
import Flashcards from "./pages/Flashcards";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/temas" element={<Temas />} />
        <Route path="/flashcards" element={<Flashcards />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

