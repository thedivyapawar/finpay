import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import CustomerPage from './Pages/CustomerPage'
import ProcessPage from './Pages/ProcessPage'
import GrowthPage from './Pages/GrowthPage'
import Error from './Components/Error'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'

function App() {

  return (
    <>
    <div className='container-fluid'>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>    
    </>
  )
}

export default App

export const myRoutes = createBrowserRouter([
  {
    path:"/",
    element : <App/>,
    errorElement :<Error/>,
    children :[
      {
        path :"/",
        element : <HomePage/>
      },
      {
        path:"/product",
        element :<ProductPage/>
      },
      {
        path :"/customer",
        element : <CustomerPage/>

      },
      {
        path : "/process",
        element : <ProcessPage/>
      },
      {
        path : "/growth",
        element:<GrowthPage/>
      },
      {
        path :"/login",
        element : <LoginPage/>
      },
      {
        path :"/signup",
        element : <SignUpPage/>
      }
      
    ]
  }
])
