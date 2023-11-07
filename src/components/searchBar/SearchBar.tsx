import { micIcon, sendIcon } from "../../assets/icons";
import "./searchBar.css";

function SearchBar() {
  return (
    <div className="searchBar-container">
      <input className='txt-input' type="text" placeholder="Search data of Mashik Prativedan"></input>
      <div className="searchbar-icon-container">
      <img className='searchbar-icon' id="send-btn" src={sendIcon} alt="send" />
      <img className='searchbar-icon' id="mic-btn" src={micIcon} alt="mic" />
      </div>
    </div>
  );
}
export default SearchBar;
