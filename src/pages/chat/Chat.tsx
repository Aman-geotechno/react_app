import { useState } from "react";
import { SearchBar } from "../../components";
import QueryAns from "../../components/queryAns/QueryAns";
import "./chat.css";
import { askDidiLogo } from "../../assets/images";
import { useNavigate } from "react-router-dom";

function Chat() {
  const [inputValue, setInputValue] = useState("");
  const naviagte=useNavigate();

  const handleBackClick=()=>{
  naviagte('/');  
  }
  
  return (
    <div className="chat-conversation">
      <div className="chatbot-header">
        <img className='chatbot-header-img' src={askDidiLogo} alt={askDidiLogo}/>
        <h3 className='chatbot-header-txt'>Smart DIDI</h3>
      </div>
      <QueryAns id='queryAns-main-container'/>
      <div className="chatbot-footer">
        <button className="home-btn" onClick={handleBackClick}>Home</button>
      <SearchBar
        id={"searchbar"}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      </div>
    </div>
  );
}
export default Chat;
