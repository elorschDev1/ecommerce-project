import { Link } from "react-router-dom"

const Navbar = () => {
  return (
  
    <nav className='navbar navbar-expand-md'>
        <div className="container">
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navigation-bar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navigation-bar">
        <Link to='/scifi' className='nav-link'>Scifi</Link>
        <Link to='/action' className='nav-link'>Action</Link>
        <Link to='/adventure' className='nav-link'>Adventure</Link>
        <Link to='/comedy' className='nav-link'>Comedy</Link>
        <Link to='/horror' className='nav-link'>Horror</Link>
        </div>
      </nav>
    
  )
}

export default Navbar