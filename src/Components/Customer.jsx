import "../assets/CSS/Customer.css"
import funds from "../assets/Images/customer-right.png"
import graph from "../assets/Images/customer.png"

function Customer(){
    return(
        <>
        <div className="row justify-content-center align-items-center my-5">

        <div className="col-md-10">
            <p className="green text-center fw-bold">WHY US</p>
            <p className="fs-1 fw-bold text-center">Why they prefer Finpay</p>

            <div className="row justify-content-evenly align-items-center my-2">

            <div className="col-10 col-md-5 customer-right rounded-4 pt-4 pt-md-3 pt-lg-4 pb-4 pb-md-3 pb-lg-5 px-4 px-lg-5 ">
                <p className="green fs-1 fw-bolder bold-text">3K+</p>
                <p className="fs-4 fw-bold">Business already running on Finpay</p>
            </div>

            <div className="col-10 col-md-5 customer-left rounded-4 pt-4 pb-5  px-4 px-lg-5 my-4 my-md-0">
                <p className="fs-4 fw-bold">Instant Withdraw your funds at any time</p>
                <div className="d-flex justify-content-center">
                <img src={funds} alt="funds" width="300px" className="customer-right-img"/>
                </div>
            </div>
            
            <div className="row justify-content-center px-4 px-md-2  px-lg-4 my-3">

                <div className="col-md-11 graph rounded-4 my-3 ">

                    <div className="row  justify-content-evenly align-items-center">

                        <div className="col-md-4 my-4 my-md-0 ">
                            <p className="fs-2 fs-lg-3 fw-bold mt-md-3">
                                No asset volatility
                            </p>
                       
                            <p className="hero-subtext">
                                Generate returns on your cash reserves without making any investments.
                            </p>

                            </div>

                        <div className="col-md-7">
                            <img src={graph} alt="graph" className="img-fluid  mt-md-4 rounded-top-4 img-customer" />
                        </div>

                    </div>

                </div>

            </div>
        </div>

        </div>

        

        </div>
        </>
    )
}

export default Customer