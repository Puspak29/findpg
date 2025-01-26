import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Routs/Layout'
import ReactDOM from 'react-dom'



const router= createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path: "",
        element: <App/>
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
