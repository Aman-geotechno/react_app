import { askDidiLogo } from "../../assets/images";
import { Header, ImgBtn } from "../../components";
import "./home.css";

function Home(props: any) {
  const { isChatbotButtonClicked, setIsChatbotButtonClicked } = props;

  function handleAskDidiBtn() {
    setIsChatbotButtonClicked(!isChatbotButtonClicked);
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
