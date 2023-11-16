import { useAppSelector } from "../../app/hooks";
import { speakerIcon, userIcon } from "../../assets/icons";
import { askDidiLogo } from "../../assets/images";
import "./queryAns.css";

function QueryAns(props) {
  const query = useAppSelector((state) => state.queryAns.query);
  const answer= useAppSelector((state) => state.queryAns.ans);

  console.log("query", query);
  console.log("ans", answer);

  return (
    <div id={props.id}>
      {query.map((question, index) => {
        return (
          <div className="queryAns-container">
            <div className="query conversation-tab" key={index}>
            <img className="conversation-profile"src={userIcon} alt={userIcon}/>
              <p >{question}</p>
              <img className="speaker" src={speakerIcon} alt={speakerIcon} />
            </div>

            {query[index] && (
              <div className="ans conversation-tab">
                <img className="conversation-profile"src={askDidiLogo} alt={askDidiLogo}/>
                {answer[index] ? (
                  <p>{answer[0][index].title}</p>
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
