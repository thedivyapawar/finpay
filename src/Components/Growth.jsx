import '../assets/CSS/Growth.css'

function Growth(){
    return(
        <>
        <div className="row justify-content-center align-items-center my-5">

        <div className="col-lg-10">
            <p className="green text-center fw-bold">OUR MISSION</p>
            <p className="fs-1 fw-bold text-center">We've helped <br />  innovative companies
            </p>
            <p className="hero-subtext text-center">Hundreds of all sizes and across all industries <br /> have made a big improvements with us.
            </p>


            <div className="row justify-content-center gap-5 my-4">
                <div className="col-md-3 col-lg-2">
                    < h1 className="font-growth fw-bold text-center">24%</h1>
                    <h6 className="text-center"> Revenue business</h6>
                </div>

                <div className="col-md-3 col-lg-2">
                < h1 className="font-growth-2 fw-bold text-center">180K</h1>
                <h6 className="text-center"> In annual revenue</h6>
                </div>

                <div className="col-md-3 col-lg-2">
                < h1 className="font-growth-3 fw-bold text-center">10+</h1>
                <h6 className="text-center">Months of runway</h6>
                </div>

            </div>

            <p className="green text-center fw-bold py-md-2">CHOOSE PLAN :</p>

            <div className="row justify-content-evenly my-2 my-md-4 mx-4">

                <div className="col-md-5 rounded-4 px-5 py-4 plan-plus my-4 my-md-0">
                <h1 className='mb-5 pb-5 growth-text'>Plus</h1>
                
                <div className='d-flex justify-content-between'>
                    <span className='my-color fs-4 fw-bold '>
                    € 2.99/month
                    </span>
                    <i className='bx bx-right-top-arrow-circle my-color fs-3'></i>

                </div>
            
                </div>


                <div className="col-md-5 rounded-4 px-5 py-4 card-2 ">
                <h1 className='mb-5 pb-5 text-white'>Premium</h1>
                
                <div className='d-flex justify-content-between'>
                    <span className='text-white fs-4 fw-bold '>
                    € 6.99/month
                    </span>
                    <i className='bx bx-right-top-arrow-circle text-white fs-3'></i>

                </div>
            
                </div>

            </div>

        </div>
        </div>
        </>
    )
}

export default Growth