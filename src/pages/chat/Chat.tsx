import { useState } from "react";
import { SearchBar } from "../../components";
import QueryAns from "../../components/queryAns/QueryAns";
import "./chat.css";

function Chat() {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");

  return (
    <div className="chat-conversation">
      <QueryAns query={query} />
      <SearchBar
        id={"searchbar"}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setQuery={setQuery}
      />
    </div>
  );
}
export default Chat;
