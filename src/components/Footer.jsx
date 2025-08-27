import { useContext } from 'react';
import {Link} from 'react-router-dom';
import CartPageContext from '../context/CartPageContext';
const Footer = () => {
  let {setCartIconClicked}=useContext(CartPageContext);
  let handleClick=()=>{
    console.log("Cart Icon clicked");
    setCartIconClicked(true);
  }
  return (
    <div className='footer mt-3'>
   <Link to="/" className='nav-link'><i className='bi-house'></i></Link>
    <Link to="/cart" className='nav-link' onClick={handleClick}><i className='bi-cart' ></i></Link>
    <Link to="/account" className='nav-link'><i className="bi-person"></i></Link>
    </div>
  )
}

export default Footer