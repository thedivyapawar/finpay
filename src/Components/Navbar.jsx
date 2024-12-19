import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png"
import '../assets/CSS/Navbar.css'

function Navbar(){
    return(
        <>
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary my-2">
        <div className="container-fluid">
            <Link to="/">
            <img src={logo} alt="logo" width="40px" className="ms-md-5" />
            </Link>
            <Link className="navbar-brand mx-2 fs-4 mycolor fw-bold" to="/">Finpay</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-6">
                <li className="nav-item mx-md-4 ">
                <Link className="nav-link navy ms-2" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item mx-md-4">
                <Link className="nav-link navy" to="/product">Product</Link>
                </li>
                <li className="nav-item mx-md-4">
                <Link className="nav-link navy" to="/customer">Customer</Link>
                </li>
                <li className="nav-item mx-md-4">
                <Link className="nav-link navy" to="/process">Process</Link>
                </li>
                <li className="nav-item mx-md-4">
                <Link className="nav-link navy" to="/growth">Growth</Link>
                </li>
            </ul>

            <form className="d-flex gap-3 mx-md-4" role="search">
                    <Link to="/login" className="text-decoration-none mycolor">
                    <button className="px-3 py-2 rounded-3 my-btn-outline" type="button">
                    Login
                    </button>
                    </Link>
                
                
                <Link to="/signup" className="text-decoration-none text-white">
                <button className=" px-3 py-2 rounded-3 my-btn " type="button">
                Sign Up
                </button>
                </Link>
                
            </form>
            
            </div>
        </div>
        </nav>
        </>
    )
}

export default Navbar;