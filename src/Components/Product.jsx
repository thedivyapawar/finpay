import transfer from "../assets/Images/transfer.png"
import account from "../assets/Images/account.png"
import security from "../assets/Images/security.png"
import '../assets/CSS/Product.css'

function Product(){
    return(
        <>
        <div className="row justify-content-center  align-items-center my-lg-5 mx-4 mx-md-0 my-4 my-lg-1">

        <div className="col-md-10 bg-white rounded-5 product-border py-4 py-md-2 py-lg-5">

        <div className="row justify-content-evenly  align-items-center mx-2 mx-md-0">
            
            <div className=" col-md-5 ">
                <p className="green mt-4 fw-bold">FUTURE PAYMENT</p>
                <p className="fs-1 fw-bold">
                Experience that grows with your scale.
                </p>
            </div>

            <div className=" col-md-4">
                <p className="hero-subtext mt-md-5 ">
                Design a financial operating system that works for your business and streamlined cash flow management
                </p>
            </div>
        </div>

        <div className="row justify-content-evenly align-items-center">

            <div className=" col-md-10 ">

            <div className="row justify-content-between mx-2 mx-md-0 my-md-3">

            <div className="col-md-4 my-2 my-md-0">
            <img src={transfer} alt="transfers-section" width="50px"  className="mb-2"/>
            <h5 className="fw-bold my-color fs-5"> Free transfers
            </h5>
            <p className="hero-subtext">Create a financial experiericeay <br />and automate repeat purchases by scheduling recuning payments
            </p>
            </div>

            <div className="col-md-4  my-2 my-md-0">
            <img src={account} alt="account-section" width="50px"  className="mb-2"/>
            <h5 className="fw-bold my-color fs-5">Multiple account
            </h5>
            <p className="hero-subtext">Run your operations with cash from <br /> your account and generate yield on funds stored in your account
            </p>
            </div>

            <div className="col-md-4  my-2 my-md-0">
            <img src={security} alt="security-section" width="40px"  className="mb-2"/>
            <h5 className="fw-bold my-color fs-5">Unmatched security
            </h5>
            <p className="hero-subtext">Securely manage your finances with organization-wide MFA, card-locking, and account-level controls
            </p>
            </div>


            </div>

            </div>

        </div>
        


        </div>

        </div>
        </>
    )
}

export default Product;