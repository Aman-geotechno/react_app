import React from "react";
import "./App.css";
import { useState } from "react";

import { Chat, Home } from "./pages";

function App() {
  const [isChatbotButtonClicked, setIsChatbotButtonClicked] = useState(false);
  return (
    <div className="App">
      <Home
        isChatbotButtonClicked={isChatbotButtonClicked}
        setIsChatbotButtonClicked={setIsChatbotButtonClicked}
      />
      
      {isChatbotButtonClicked && <Chat />}
    </div>
  );
}

export default App;
