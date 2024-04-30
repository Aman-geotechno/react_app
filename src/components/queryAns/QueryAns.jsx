import { useState, useEffect, useRef } from "react";
import { useAppSelector } from "../../app/hooks";
import {
  botIcon,
  speakerIcon,
  userIcon,
  activeSpeakerIcon,
} from "../../assets/icons";
import { askDidiLogo } from "../../assets/images";
import handleSpeechSynthesis from "../../utils/handleSpeechSynthesis";
import "./queryAns.css";

function QueryAns(props) {
  //Get query and ans from store
  const [isSpeakerClicked, setIsSPeakerClicked] = useState([]);
  const [contentType,setContentType]= useState('');
  const query = useAppSelector((state) => state.queryAnsReducer.query);
  const answer = useAppSelector((state) => state.queryAnsReducer.ans);
   const queryAnsReducerValue=useAppSelector((state)=>state.queryAnsReducer);

  //ref for autoscrolling
  const queryAnsWindowRef = useRef(null);

  //   useEffect(() => {
  //     if(isSpeakerClicked){
  //     setIsSPeakerClicked((prevState) => [...prevState, speaking], [isSpeakerClicked]);
  // }});

  const handleSpeakerClick = (text, index, contentTypeIS) => {
    try {
      let utterance = handleSpeechSynthesis(text);
      const isSpeakerClickedCopy=[...isSpeakerClicked];
      setContentType(contentTypeIS);
      utterance.onstart = () => {
        isSpeakerClickedCopy[index]=true;
        setIsSPeakerClicked([...isSpeakerClickedCopy]);
        
      };
      utterance.onend = () => {
        isSpeakerClickedCopy[index]=false;
        setIsSPeakerClicked([...isSpeakerClickedCopy]);
        
      };
    } catch (error) {
      console.log(error);
    }
    console.log(isSpeakerClicked);
  };

  //Auto scroll to latest msg
  useEffect(() => {
    queryAnsWindowRef.current.scrollTop =
      queryAnsWindowRef.current.scrollHeight;
  }, [query, answer]);

  return (
    <div id={props.id} ref={queryAnsWindowRef}>
      {/* Fetch and display query and answer in conversation window */}
      {query.map((question, index) => {
        return (
          <div className="queryAns-container">
            <div className="query" key={index}>
              <div className="query-conversation-txt-container">
                <img
                  className="speaker"
                  src={
                    isSpeakerClicked[index] && contentType==='query' ? activeSpeakerIcon : speakerIcon
                  }
                  alt="speaker"
                  onClick={() => handleSpeakerClick(question, index,'query')}
                />
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
                  <img
                    className="speaker"
                    src={
                      isSpeakerClicked[index]&& contentType==='answer' ? activeSpeakerIcon : speakerIcon
                    }
                    alt="speaker"
                    onClick={() => handleSpeakerClick(answer[index], index,'answer')}
                  />
                  {answer[index] ? (
                    <p className="conversation-txt">{answer[index]}</p>
                  ) : (
                    <p className="conversation-txt">
                      {" "}
                      Analyzing your query and fetching answer...
                    </p>
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


