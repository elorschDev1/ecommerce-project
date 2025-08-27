import { Link,Outlet} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './components/Footer';
import UserProvider from './context/UserProvider';
import ButtonProvider from './context/ButtonProvider';
import MovieProvider from './context/MovieProvider';
import CartPageProvider from './context/CartPageProvider';
import ToastProvider from './context/ToastProvider';
 import { Navbar, Nav, Container } from 'react-bootstrap';
import PurchaseButtonProvider from './context/PurchaseButtonProvider';
const App = () => {
  return (
    <PurchaseButtonProvider>
    <UserProvider>
      <ButtonProvider>
        <MovieProvider>
          <CartPageProvider>
            <ToastProvider>
              
    <div>
           <Navbar expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <ul  className="navbar-nav ms-auto">
                     <li className="nav-item"><Link to="/" className='nav-link'>Home</Link></li>
                        <li className="nav-item"><Link to="/scifi" className='nav-link'>Scifi</Link></li>
                        <li className="nav-item"><Link to="/action" className='nav-link'>Action</Link></li>
                        <li className="nav-item"><Link to="/adventure" className='nav-link'>Adventure</Link></li>
                        <li className="nav-item"><Link to="/comedy" className='nav-link'>Comedy</Link></li>
                        <li className="nav-item"><Link to="/horror" className='nav-link'>Horror</Link></li>
                       
                    </ul>
              
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h1 id="main-heading">E-MOVIE STORE</h1>
      <Outlet/>
      <Footer/>
    </div>
  
    </ToastProvider>
    </CartPageProvider>
    </MovieProvider>
    </ButtonProvider>
    </UserProvider>
    </PurchaseButtonProvider>
  )
}
export default App