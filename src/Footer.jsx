import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
   <Link to="/" className='nav-link'><i className='bi-house'></i></Link>
    <Link to="/cart" className='nav-link'><i className='bi-cart'></i></Link>
    <Link to="/account" className='nav-link'><i className="bi-person"></i></Link>
    </div>
  )
}

export default Footer