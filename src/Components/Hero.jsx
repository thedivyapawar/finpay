import heroimg from "../assets/Images/hero-img.png"
import '../assets/CSS/Hero.css'
import herosub from '../assets/Images/hero-sub.png'

function Hero(){
    return(
        <>
        <div className="row justify-content-center align-items-center flex-wrap-reverse px-4 bg-body-tertiary">

        <div className="col-md-5 py-4">

            <p className="fw-bold my-3 hero-text">Get paid early <br />save automatically <br /> all your pay.
            </p>
            <p className="fs-6 hero-subtext mb-4">Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools.</p>
            <span className="py-3 ps-4  border border-tertiary  hero-input-div rounded-3 d-none d-lg-inline-block ">
                <input type="email" name="email" id="email" placeholder="Your Business Email" className="hero-input" style={{backgroundColor :"#f8f9fa"}}/>
                <button className="my-btn px-3 py-2 rounded-3 ">Get Started
                <i className='bx bxs-right-top-arrow-circle fs-4 mx-2'></i>
                </button>
            </span>

            <div className="my-4">
                <img src={herosub} alt="hero-sub-image" className="img-fluid"/>
            </div>
        </div>

        <div className="col-md-5">
            <img src={heroimg} alt="hero-img" className='img-fluid rounded-5'/>
        </div>


        </div>
        </>
    )
}

export default Hero;