import { useEffect,useRef } from "react";
import { useAppSelector } from "../../app/hooks";
import { botIcon, speakerIcon, userIcon } from "../../assets/icons";
import { askDidiLogo} from "../../assets/images";
import "./queryAns.css";

function QueryAns(props) {
  //Get query and ans from store
  const query = useAppSelector((state) => state.queryAnsReducer.query);
  const answer = useAppSelector((state) => state.queryAnsReducer.ans);
  const queryAnsWindowRef=useRef(null);
  
  //Auto scroll to latest msg
  useEffect(()=>{
    queryAnsWindowRef.current.scrollTop=queryAnsWindowRef.current.scrollHeight;
  },[query,answer]);

  return (
    <div id={props.id} ref={queryAnsWindowRef}>
      {/* Fetch and display query and answer in conversation window */}
      {query.map((question, index) => {
        return (
          <div className="queryAns-container" >        
            <div className="query" key={index}>
              <div className="query-conversation-txt-container">
                <img className="speaker" src={speakerIcon} alt={speakerIcon} />
                <p className="conversation-txt">{question}</p>
              </div>
              <img
                className="user-icon conversation-profile"
                src={userIcon}
                alt={userIcon}
              />
            </div>

            {query[index] && (
              <div className="ans">
                <img
                  className="bot-icon conversation-profile"
                  src={botIcon}
                  alt={askDidiLogo}
                />
                <div className="ans-conversation-txt-container">
                <img className="speaker" src={speakerIcon} alt={speakerIcon} />
                {answer[index] ? (
                  <p className="conversation-txt">{answer[index]}</p>
                ) : (
                  <p className="conversation-txt"> Analyzing your query and fetching answer...</p>
                )}
               
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
export default QueryAns;
