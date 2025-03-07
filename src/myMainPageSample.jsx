import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/blog',
        element:<Blog/>
      },{
        path:"*",
        element:<ErrorPage/>
      }
    ]
  }
]

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
