import { Link,Outlet} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import Footer from './Footer';
import SearchBar from './SearchBar';
import UserProvider from './context/UserProvider';
import ButtonProvider from './context/ButtonProvider';
import MovieProvider from './context/MovieProvider';
const App = () => {
  return (
    <UserProvider>
      <ButtonProvider>
        <MovieProvider>
    <div className="app">
      <h1 id="main-heading">E-MOVIE STORE</h1>
      <SearchBar/>
    <nav className='nav nav-pills nav-justified'>
        <Link to='/scifi' className='nav-link'>Scifi</Link>
        <Link to='/action' className='nav-link'>Action</Link>
        <Link to='/adventure' className='nav-link'>Adventure</Link>
        <Link to='/comedy' className='nav-link'>Comedy</Link>
        <Link to='/horror' className='nav-link'>Horror</Link>
      </nav>
      <Outlet/>
      <Footer/>
    </div>
    </MovieProvider>
    </ButtonProvider>
    </UserProvider>
  )
}
export default App