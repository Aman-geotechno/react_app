import { useDispatch } from "react-redux";
import { micIcon, sendIcon, unclickableSendIcon } from "../../assets/icons";
import "./searchBar.css";
import {setQueryInput} from '../../features/queryAnsSlice'
import { fetchAnswerMiddleware } from "../../middlewares/fetchAnswerMiddleware";
import { useEffect, useState } from "react";

function SearchBar(props) {
  const { id, inputValue, setInputValue} = props;
  const [isSendClickable, setIsSendClickable]=useState(false);

  const dispatch=useDispatch();

  const handleInput = (e) => {
    setInputValue(e.target.value);
    // if(e.target.value!=='')
    // setIsSendClickable(true);
  };

  useEffect(()=>setIsSendClickable(inputValue!==''),
  [inputValue])


  const handleQuery = () => {
    dispatch(setQueryInput(inputValue));
    dispatch(fetchAnswerMiddleware(inputValue));
    setInputValue('');
  };

 //handle Enter press
  const handleEnter=(e)=>{
    if(e.key==='Enter' && isSendClickable){
      handleQuery();
    }
  }

  return (
    <div id={id} className="searchBar-container">
      <input
        className="txt-input"
        type="text"
        value={inputValue}
        placeholder="Search data of Mashik Prativedan"
        onChange={handleInput}
        onKeyDown={handleEnter}
      ></input>

      <div className="searchbar-icon-container">
        { isSendClickable ?
        <img
          className="searchbar-icon"
          id="send-btn"
          src={sendIcon}
          alt="send"
          onClick={handleQuery}
        />
        :
        <img className="searchbar-icon"
        id="unclickable-send-btn"
        src={unclickableSendIcon}
        alt="send"/>
        }

      
        <img className="searchbar-icon" id="mic-btn" src={micIcon} alt="mic" />
      </div>
    </div>
  );
}
export default SearchBar;
