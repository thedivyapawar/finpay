import { Link } from "react-router-dom"
import logo from "../assets/Images/logo.png"
import '../assets/CSS/Footer.css'

function Footer(){
    return(
        <>
        <div className="row justify-content-center align-items-center my-5 mx-4 mx-md-0">
            <div className="col-md-11 rounded-4 px-4 py-4 mb-4 footer-card" style={{backgroundColor : "  #023247"}}>
                <div className="row justify-content-evenly align-items-center">
                    <div className="col-md-5 py-3 py-md-5">
                        <p className="green">TRY IT NOW</p>
                        <h1 className="text-white fs-1 my-4">Ready to level up your Payment Process</h1>
                        <p className="hero-subtext my-3 my-md-4">Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools.</p>
                    </div>

                    <div className="col-md-5">
                   
                    <button className=" px-4 py-2 rounded-3 my-btn fs-5 me-4" type="button">Get Started Now</button>
                    <button className="px-4 py-2 rounded-3 my-btn-outline fs-5 text-white mt-3 mt-lg-0" type="button" style={{backgroundColor:" #023247"}}>
                        <span>Learn More</span>
                   
                    </button>

                    </div>
                </div>

                
            </div>

            <div className="col-md-11">
            <div className="row  justify-content-evenly text-center text-md-left my-4 ">
                    <div className="col-md-3 my-3 ">
                    <img src={logo} alt="logo" width="50px"/>
                    <Link className="navbar-brand mx-2 fs-3 mycolor fw-bold" to="/">Finpay</Link>
                    </div>

                    <div className="col-md-2">
                    <h4 className="fw-bold my-4">Solutions</h4>
                    <p className="hero-subtext">Small Bussiness </p>
                    <p className="hero-subtext">Freelancers </p>
                    <p className="hero-subtext">Customers </p>
                    <p className="hero-subtext">Taxes</p>
                    </div>


                    <div className="col-md-2">
                    <h4 className="fw-bold my-4">Company </h4>
                    <p className="hero-subtext">About Us</p>
                    <p className="hero-subtext">Career </p>
                    <p className="hero-subtext">Contact</p>
                    </div>

                    <div className="col-md-2">
                    <h4 className="fw-bold my-4">Learn</h4>
                    <p className="hero-subtext">Blog </p>
                    <p className="hero-subtext">Ebooks</p>
                    <p className="hero-subtext">Guides </p>
                    <p className="hero-subtext">Templates</p>
                    </div>


                    <div className="col-md-2">
                    <h6  className="mycolor mt-4 mb-3">Follow us on</h6>
                    <i className='bx bxl-linkedin-square fs-3 me-2 '></i>
                    <i className='bx bxl-facebook-square fs-3 me-2' ></i>
                    <i className='bx bxl-instagram-alt fs-3'></i>

                    </div>

                
                </div>

                <hr />

                <h6 className="hero-subtext text-center">@Finpay 2024 . All Rights Reserved</h6>
                <h6 className="text-center">
                    <a href="https://www.linkedin.com/in/heydivyapawar/" target="_blank" className="green fw-bold">Developed by Divya Pawar</a>
                </h6>
            </div>
        </div>

        </>
    )
}

export default Footer