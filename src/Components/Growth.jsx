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

            <div className="row justify-content-evenly my-2 my-md-4 mx-3">

                <div className="col-md-5 rounded-4 px-5 py-4 card-2 my-4 my-md-0">
                <h1 className='mb-5 pb-5 text-white'>Plus</h1>
                
                <div className='d-flex justify-content-between'>
                    <span className='text-white fs-4 fw-bold '>
                    € 2.99/month
                    </span>
                    <i className='bx bx-right-top-arrow-circle text-white fs-3'></i>

                </div>
            
                </div>


                <div className="col-md-5 rounded-4">
                {/* <h1 className='mb-5 pb-5 text-white'>Premium</h1>
                
                <div className='d-flex justify-content-between'>
                    <span className='text-white fs-4 fw-bold '>
                    € 6.99/month
                    </span>
                    <i className='bx bx-right-top-arrow-circle text-white fs-3'></i> */}

                {/* </div> */}

                
                    <div className="flip-card ">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <p className="heading_8264 fs-3">Premium</p>
                        
                        
                        
                        <div className='d-flex justify-content-between premium-margin'>
                            <span className='text-white fs-4 fw-bold '>
                            € 6.99/month
                            </span>
                            <i className='bx bx-right-top-arrow-circle text-white fs-3'></i>

                        </div>

                        </div>      


                        <div className="flip-card-back">
                        <div className="strip"></div>
                        <svg
                            version="1.1"
                            className="contactless"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            width="50px"
                            height="50px"
                            viewBox="0 0 50 50"
                            xml:space="preserve"
                        >
                            <image
                            id="image0"
                            width="30"
                            height="30"
                            x="0"
                            y="20"
                            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                        AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
                        cwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IEzgIwaKTAAADDklEQVRYw+1XS0iUURQ+f5qPyjQf
                        lGRFEEFK76koKGxRbWyVVLSOgsCgwjZBJJYuKogSIoOonUK4q3U0WVBWFPZYiIE6kuArG3VGzK/F
                        fPeMM/MLt99/NuHdfPd888/57jn3nvsQWWj/VcMlvMMd5KRTogqx9iCdIjUUmcGR9ImUYowyP3xN
                        GQJoRLVaZ2DaZf8kyjEJALhI28ELioyiwC+Rc3QZwRYyO/DH51hQgWm6DMIh10KmD4u9O16K49it
                        VoPOAmcGAWWOepXIRScAoJZ2Frro8oN+EyTT6lWkkg6msZfMSR35QTJmjU0g15tIGSJ08ZZMJkJk
                        HpNZgSkyXosS13TkJpZ62mPIJvOSzC1bp8vRhhCakEk7G9/o4gmZdbpsTcKu0m63FbnBP9Qrc15z
                        bkbemfgNDtEOI8NO5L5O9VYyRYgmJayZ9nPaxZrSjW4+F6Uw9yQqIiIZwhp2huQTf6OIvCZyGM6g
                        DJBZbyXifJXr7FZjGXsdxADxI7HUJFB6iWvsIhFpkoiIiGTJfjJfiCuJg2ZEspq9EHGVpYgzKqwJ
                        qSAOEwuJQ/pxPvE3cYltJCLdxBLiSKKIE5HxJKcTRNeadxfhDiuYw44zVs1dxKwRk/uCxIiQkxKB
                        sSctRVAge9g1E15EHE6yRUaJecRxcWlukdRIbGFOSZCMWQA/iWauIP3slREHXPyliqBcrrD71Amz
                        Z+rD1Mt2Yr8TZc/UR4/YtFnbijnHi3UrN9vKQ9rPaJf867ZiaqDB+czeKYmd3pNa6fuI75MiC0uX
                        XSR5aEMf7s7a6r/PudVXkjFb/SsrCRfROk0Fx6+H1i9kkTGn/E1vEmt1m089fh+RKdQ5O+xNJPUi
                        cUIjO0Dm7HwvErEr0YxeibL1StSh37STafE4I7zcBdRq1DiOkdmlTJVnkQTBTS7X1FYyvfO4piaI
                        nKbDCDaT2anLudYXCRFsQBgAcIF2/Okwgvz5+Z4tsw118dzruvIvjhTB+HOuWy8UvovEH6beitBK
                        xDyxm9MmISKCWrzB7bSlaqGlsf0FC0gMjzTg6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDIt
                        MTNUMDg6MTk6NTYrMDA6MDCjlq7LAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTEzVDA4OjE5
                        OjU2KzAwOjAw0ssWdwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xM1QwODoxOTo1Nisw
                        MDowMIXeN6gAAAAASUVORK5CYII="
                            ></image>
                        </svg>
                        <p className="number">9759 2484 5269 6576</p>
                        <p className="date_8264">12/24</p>
                        <p className="exp">EXP</p>
                        <p className="cvc_number">123</p>
                        <p className="cvc">CVC</p>
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

export default Growth