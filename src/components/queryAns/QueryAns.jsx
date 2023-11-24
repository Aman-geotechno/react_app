import { useAppSelector } from "../../app/hooks";
import { speakerIcon, userIcon } from "../../assets/icons";
import { askDidiLogo } from "../../assets/images";
import "./queryAns.css";

function QueryAns(props) {
  //Get query and ans from store
  const query = useAppSelector((state) => state.queryAnsReducer.query);
  const answer = useAppSelector((state) => state.queryAnsReducer.ans);

  return (
    <div id={props.id}>
      {/* Fetch and display query and answer in conversation window */}
      {query.map((question, index) => {
        return (
          <div className="queryAns-container">
            <div className="query conversation-tab" key={index}>
              <img
                className="conversation-profile"
                src={userIcon}
                alt={userIcon}
              />
              <p className="conversation-txt">{question}</p>
              <img className="speaker" src={speakerIcon} alt={speakerIcon} />
            </div>

            {query[index] && (
              <div className="ans conversation-tab">
                <img
                  className="conversation-profile"
                  src={askDidiLogo}
                  alt={askDidiLogo}
                />
                {answer[index] ? (
                  <p className="conversation-txt">{answer[index]}</p>
                ) : (
                  "Analyzing your query and fetching answer..."
                )}
                <img className="speaker" src={speakerIcon} alt={speakerIcon} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
export default QueryAns;
