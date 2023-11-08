import { speakerIcon } from "../../assets/icons";
import "./queryAns.css";

function QueryAns(props: any) {
  const { query } = props;
  return (
    <div className="queryAns-main-container">
      <div className="queryAns-container">
        <div className="query">
          <p>{query}</p>
          <img className="speaker" src={speakerIcon} alt={speakerIcon} />
        </div>
        {query && (
          <div className="ans">
            <p>Answer will be shown here</p>
            <img className="speaker" src={speakerIcon} alt={speakerIcon} />
          </div>
        )}
      </div>
    </div>
  );
}
export default QueryAns;
