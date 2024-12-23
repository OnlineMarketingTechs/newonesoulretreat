import Link from "next/link"


export default function ContactInfo() {
    return (
        <>
            <section className="contact-info-section-eight">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact-info-eight">
                                <ul>
                                    <li>
                                        <div className="inner"> 
                                        <div className="title">
                                                <h3>Get Your Copy Now!</h3>
                                                <p>We Choose a New Winner Each Season!</p>
                                                <p className="tsmall">Spring-Summer-Fall-Winter</p>
                                            </div>
                                            <div className="icon">
                                                <span className="" />
                                            </div>
                                           
                                        </div>
                                    </li>

                                    <li>
                                        <div className="inner">
                                                <div className="btn-box text-center">
                                            
                                                    <Link href="/raffle" className="theme-btn btn-style-eight"><span className="btn-title">GET IT NOW!</span></Link>
                                                </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
