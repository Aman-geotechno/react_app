import { useState } from "react";
import { askDidiLogo } from "../../assets/images";
import { Header, ImgBtn } from "../../components";
import './home.css';
import Chat from "../chat/Chat";

function Home(){
    const [isChatbotButtonClicked, setIsChatbotButtonClicked]=useState(false);
    
    function handleAskDidiBtn(){
     setIsChatbotButtonClicked(!isChatbotButtonClicked);  
    }

return(
    <div className="home-page">
        <Header />
        <ImgBtn id='chatbotButton' imgSrc={askDidiLogo} handleImgBtnClick={handleAskDidiBtn}/>
        {isChatbotButtonClicked && <Chat/>}
        
    </div>
)
}
export default Home;