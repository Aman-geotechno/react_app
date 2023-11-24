import { askDidiLogo } from "../../assets/images";
import { Header, ImgBtn } from "../../components";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home(props: any) {
  const {setIsChatbotButtonClicked } = props;
  const navigate=useNavigate();
  
  function handleAskDidiBtn() {
    setIsChatbotButtonClicked(true);
    navigate('/chat');
  }

  return (
    <div className="home-page">
      <Header />
      <ImgBtn
        id="chatbotButton"
        imgSrc={askDidiLogo}
        handleImgBtnClick={handleAskDidiBtn}
      />
    </div>
  );
}
export default Home;
