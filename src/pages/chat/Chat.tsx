import { useState } from "react";
import { SearchBar } from "../../components";
import QueryAns from "../../components/queryAns/QueryAns";
import "./chat.css";

function Chat() {
  const [inputValue, setInputValue] = useState("");
  
  return (
    <div className="chat-conversation">
      <QueryAns id='queryAns-main-container'/>
      <SearchBar
        id={"searchbar"}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
}
export default Chat;
