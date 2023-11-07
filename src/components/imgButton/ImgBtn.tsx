import './imgBtn.css';
function ImgBtn(props:any){
    const handleImgBtnClick=props.handleImgBtnClick;
    const imgSrc=props.imgSrc;

return(
    <div className="imgBtnContainer">
        <img className='btnImg'src={imgSrc} alt='imgBtn' onClick={()=>handleImgBtnClick()}/>

    </div>
)
}

export default ImgBtn;