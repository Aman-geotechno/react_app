import { micIcon, sendIcon } from "../../assets/icons";
import "./searchBar.css";

function SearchBar(props: any) {
  const { id, inputValue, setInputValue, setQuery } = props;

  const handleInput = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleQuery = () => {
    setQuery(inputValue);
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
