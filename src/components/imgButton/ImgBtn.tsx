import './imgBtn.css';
function ImgBtn(props:any){
    const handleImgBtnClick=props.handleImgBtnClick;
    const imgSrc=props.imgSrc;
    const id=props.id;

return(
    <div id={id} className="imgBtnContainer">
        <img className='btnImg' src={imgSrc} alt='imgBtn' onClick={()=>handleImgBtnClick()}/>
    </div>
)
}

export default ImgBtn;