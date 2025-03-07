//This component will serve as the layout for my app, it will contain a navbar and an outlet for the routed pages
import {Outlet,Link} from 'react-router-dom';
const App = () => {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
    <Outlet/>{/*This is where the routed pages will render*/}
    </>
  )
}

export default App