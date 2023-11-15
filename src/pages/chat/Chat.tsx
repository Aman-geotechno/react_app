import { useEffect, useState } from "react";
import { SearchBar } from "../../components";
import QueryAns from "../../components/queryAns/QueryAns";
import "./chat.css";
import { useAppSelector } from "../../app/hooks";

function Chat() {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [answer,setAnswer]= useState('');
  const [queryAns, setQueryAns]=useState([{}]);



  return (
    <div className="chat-conversation">
      <QueryAns query={query} ans={answer}/>
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
