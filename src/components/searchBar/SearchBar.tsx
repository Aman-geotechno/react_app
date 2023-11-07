import { micIcon, sendIcon } from "../../assets/icons";
import "./searchBar.css";

function SearchBar() {
  return (
    <div className="searchBar-container">
      <input type="text" placeholder="Search data of Mashik Prativedan"></input>
      <img id="send-btn" src={sendIcon} alt="send" />
      <img id="mic-btn" src={micIcon} alt="mic" />
    </div>
  );
}
export default SearchBar;
