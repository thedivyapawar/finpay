import '../assets/CSS/Process.css'

function Process(){

    return(
        <>
        <div className="row justify-content-center align-items-center process-container p-5">
             <div className="col-md-11">
                <p className='green'>STEP</p>

                <p className='text-white fw-bold fs-2'>
                Maximize your returns with a <br />Reserve account that generates.
                </p>

                <div className="row justify-content-between align-items-center ">
                    <div className="col-md-4 process-1 rounded-4 my-2 px-3 px-md-5 py-2">

                        <p className='process-text-1'>1</p>
                        <p className='fs-4 text-white'>Open your account
                        </p>
                        <p className='hero-subtext'>
                        Sign up to finpay and set up your account from the dashboard.
                        </p>

                    </div>

                    <div className="col-md-3 process-2 rounded-4 my-2 px-3 px-md-4 px-lg-5 py-2">
                        <p className='process-text-1'>2</p>
                        <p className='fs-4 text-white'>Transfer your money
                        </p>
                        <p className='hero-subtext'>
                        Move money from to another account into and start to earning up.
                        </p>
                    </div>

                    <div className="col-md-4 process-3 rounded-4 my-2 px-3 px-md-5 py-2">
                        <p className='process-text-1'>3</p>
                        <p className='fs-4 text-white'>Watch your balance grow
                        </p>
                        <p className='hero-subtext'>
                        Accessed instantly and remain insulated from market volatility.
                        </p>
                    </div>

                </div>

             </div>
        </div>
        </>
    )
}

export default Process;