import { Link,Outlet} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Footer from './Footer';
import SearchBar from './SearchBar';
import UserProvider from './context/UserProvider';
import ButtonProvider from './context/ButtonProvider';
import MovieProvider from './context/MovieProvider';
import CartPageProvider from './context/CartPageProvider';
const App = () => {
  return (

    <UserProvider>
      <ButtonProvider>
        <MovieProvider>
          <CartPageProvider>
    <div className="app">
      
      {/*   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <button 
                className="navbar-toggler"
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
              
                <div className="collapse navbar-collapse" id='navbarNav'>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link to="/" className='nav-link'>Home</Link></li>
                        <li className="nav-item"><Link to="/scifi" className='nav-link'>Scifi</Link></li>
                        <li className="nav-item"><Link to="/action" className='nav-link'>Action</Link></li>
                        <li className="nav-item"><Link to="/adventure" className='nav-link'>Adventure</Link></li>
                        <li className="nav-item"><Link to="/comedy" className='nav-link'>Comedy</Link></li>
                        <li className="nav-item"><Link to="/horror" className='nav-link'>Horror</Link></li>
                       
                    </ul>
                </div>
            </div>
        </nav>*/}
           <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <button 
                className="navbar-toggler"
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/*Collapsible Menu*/}
                <div className="collapse navbar-collapse" id='navbarNav'>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link to="/" className='nav-link text-white'>Home</Link></li>
                        <li className="nav-item"><Link to="/about" className='nav-link text-white'>About Us</Link></li>
                        <li className="nav-item"><Link to="/contact" className='nav-link text-white'>Contact us</Link></li>
                        <li className="nav-item"><Link to="/location" className='nav-link text-white'>Our Location</Link></li>
                        <li className="nav-item"><Link to="/gallery" className='nav-link text-white'>View Our Gallery</Link></li>
                        <li className="nav-item"><Link to="/testimonials" className='nav-link text-white'>Testimonials</Link></li>
                        <li className="nav-item"><Link to="/orderonline" className='nav-link text-white'>Order Online</Link></li>
                        <li className="nav-item"><Link to="/reservations" className='nav-link text-white'>Make Reservations</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <h1 id="main-heading">E-MOVIE STORE</h1>
        <SearchBar/>
      <Outlet/>
      <Footer/>
    </div>
    </CartPageProvider>
    </MovieProvider>
    </ButtonProvider>
    </UserProvider>
  )
}
export default App