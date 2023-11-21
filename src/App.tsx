import React from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Chat, Home } from "./pages";

function App() {
  const [isChatbotButtonClicked, setIsChatbotButtonClicked] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home setIsChatbotButtonClicked={setIsChatbotButtonClicked} />
            }
          />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
