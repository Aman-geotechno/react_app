import { useAppDispatch } from "../../app/hooks";
import { micIcon, sendIcon, unclickableSendIcon } from "../../assets/icons";
import { setQuery } from "../../features/queryAnsSlice";
import { fetchAnswerMiddleware } from "../../middlewares/fetchAnswerMiddleware";
import { useEffect, useState } from "react";
import "./searchBar.css";
import handleSpeechRecognition from "../../utils/handleSpeechRecognition";

function SearchBar(props) {
  const { id, inputValue, setInputValue } = props;
  const [isSendClickable, setIsSendClickable] = useState(false);
  const [isListening,setIsListening]=useState(false);

  const dispatch = useAppDispatch();

  //handle user input
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  //set send button clickable or not
  useEffect(
    () =>
      setIsSendClickable(inputValue !== "" && inputValue !== "Listening..."),
    [inputValue]
  );

  //handle send button click
  const handleQuery = () => {
    dispatch(setQuery(inputValue));
    dispatch(fetchAnswerMiddleware(inputValue));
    setInputValue("");
  };

  //handle Enter press
  const handleEnter = (e) => {
    if (e.key === "Enter" && isSendClickable) {
      handleQuery();
    }
  };

  //handle mic button click
  const handleMicClick = () => {
    setInputValue("Listening...");
    setIsListening(true);
    setIsSendClickable(false); //Need to handle input value after mic click and after stop listening
    
    const speechPromise = handleSpeechRecognition();
    
    console.log("speechpromise reult is:", speechPromise);
    
    speechPromise.then((word) => {
      setIsListening(false);
      if (word.length > 0) {
        console.log("word is:", word);
        setInputValue(word);
        setIsSendClickable(true);
      }
      else{
        setIsListening(false);
        setInputValue('');
      }
    },(err) => {
      setIsListening(false);
      setInputValue("");
      console.log(err);
    });
  };  

  //  useEffect(()=>setInputValue(sentence),[sentence]);

  return (
    <div id={id} className="searchBar-container">
      <input
        className="txt-input"
        type="text"
        value={inputValue}
        placeholder="Search data of Masik Prativedan"
        onChange={handleInput}
        onKeyDown={handleEnter}
      ></input>

      <div className="searchbar-icon-container">
        {isSendClickable ? (
          <img
            className="searchbar-icon"
            id="send-btn"
            src={sendIcon}
            alt="send"
            onClick={handleQuery}
          />
        ) : (
          <img
            className="searchbar-icon"
            id="unclickable-send-btn"
            src={unclickableSendIcon}
            alt="send"
          />
        )}
       
        <img 
          className={`searchbar-icon${isListening?'listening':''} `}
          id='mic-btn'
          src={micIcon}
          alt="mic"
          onClick={handleMicClick}
        />
      </div>
    </div>
  );
}
export default SearchBar;
