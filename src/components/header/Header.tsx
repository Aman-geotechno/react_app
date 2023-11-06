import './header.css';
import { jeevikaLogo,ashokStambh,biharSarkarlogo } from '../../assets/images';

function Header(){
return(
    <div className='header'>
        <img className="brand-logo" src={jeevikaLogo} alt='jeevika-logo' />
        <h2 className='brand-text'>Jeevika</h2>
        <div className='gov-img-container'>
        <img className="gov-img" src={biharSarkarlogo} alt='jeevika-logo' />
        <img className="gov-img" src={ashokStambh} alt='jeevika-logo' />
        </div>
    </div>
)
}
export default Header;