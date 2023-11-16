import { useDispatch } from "react-redux";
import { micIcon, sendIcon } from "../../assets/icons";
import "./searchBar.css";
import {setQueryInput} from '../../features/queryAnsSlice'
import { fetchAnswerMiddleware } from "../../middlewares/fetchAnswerMiddleware";

function SearchBar(props) {
  const { id, inputValue, setInputValue} = props;

  const dispatch=useDispatch();

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleQuery = () => {
    dispatch(setQueryInput(inputValue));
    dispatch(fetchAnswerMiddleware(inputValue));
  };

  return (
    <div id={id} className="searchBar-container">
      <input
        className="txt-input"
        type="text"
        placeholder="Search data of Mashik Prativedan"
        onChange={handleInput}
      ></input>
      <div className="searchbar-icon-container">
        <img
          className="searchbar-icon"
          id="send-btn"
          src={sendIcon}
          alt="send"
          onClick={handleQuery}
        />
        <img className="searchbar-icon" id="mic-btn" src={micIcon} alt="mic" />
      </div>
    </div>
  );
}
export default SearchBar;
