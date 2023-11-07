import { useState } from "react";
import { askDidiLogo } from "../../assets/images";
import { Header, ImgBtn } from "../../components";
import './home.css';

function Home(){
    const [isChatbotButtonClicked, setIsChatbotButtonClicked]=useState(false);
    
    function handleAskDidiBtn(){
     setIsChatbotButtonClicked(!isChatbotButtonClicked);  
    }

return(
    <div className="home-page">
        <Header />
        <ImgBtn id='chatbotButton' imgSrc={askDidiLogo} handleImgBtnClick={handleAskDidiBtn}/>
    </div>
)
}
export default Home;