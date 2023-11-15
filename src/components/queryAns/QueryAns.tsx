import { useAppSelector } from "../../app/hooks";
import { speakerIcon } from "../../assets/icons";
import "./queryAns.css";

function QueryAns(props: any) { 
  const query=useAppSelector(state=>state.queryAns.query);
  const answer=useAppSelector((state)=>state.queryAns.ans);

  console.log("query",query);
  console.log("ans",answer);
  

  return (
    <div className="queryAns-main-container">
      <div className="queryAns-container">
        {query.map((question,index)=>(
        <div className="query" key={index}>
          <p>{question}</p>
          <img className="speaker" src={speakerIcon} alt={speakerIcon} />
        
        {query && 
        answer[index] &&(
          <div className="ans" key={index} >
            <p >{`Answer will be shown here {answer[index]`}</p>
            <img className="speaker" src={speakerIcon} alt={speakerIcon} />
            </div>
            )
        }
        </div>
        ))}
      </div> 
     </div>
  );
} 
export default QueryAns;
