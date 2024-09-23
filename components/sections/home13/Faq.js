'use client'
import Link from "next/link"
import { useState } from 'react'
 

export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <section className="faq-section-home13">
                <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/Kona-Hawaii-Map.webp)' }} />
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="content-inner">
                                    <figure className="icon-box"><img src="/assets/images-4/icons/" alt="" /></figure>
                                    <div className="inner">
                                        <figure className="thumb-box"><img src="assets/images/journey-cafe-logo-ss.png" alt="Journey Cafe - right by the beach in Kailua-Kona" /></figure>
                                        <h6>Journey Cafe</h6>
                                        <h2><Link href="tel:8087317194">+(808) 731-7194</Link></h2>
                                    </div>
                                    <div className="email-box">
                                    <h5>Location & Hours</h5>
                                        <p><Link href="https://www.google.com/maps/place/Journey+Cafe+Big+Island/@19.6374298,-156.0040967,15.25z/data=!4m6!3m5!1s0x79540fa973b84335:0xcf30ce9d3f2e946e!8m2!3d19.6386698!4d-155.9930129!16s%2Fg%2F11hzph68hn?entry=ttu">75-5729 Ali'i Dr, C-106 Kailua-Kona, HI 96740</Link></p>
                                    </div>
                                    <ul className="info clearfix">
                                    <li></li>
                                        <li>Monday - Friday:</li>
                                        <li>Everyday 10 am to 4 pm.</li>
                                        <li>**Open from 7 am on Ironman Day!</li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link href="https://www.clover.com/online-ordering/journey-cafe-kailuakona">Order Ahead and Skip The Wait!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                            <div className="inner-box">
                                <div className="sec-title-two">
                                    <h6>"To be grateful is to be full of greatness!"</h6>
                                    <h2>My journey is your journey, <br></br>  our journey~</h2>
                                </div>
                                <div className="text mb-5">
                                    <p>Sam Kuo</p>
                                </div>
                                <div className="certPurePlant">
                                <img src=" assets/images/PPC RC CertificateJourneytoGoodHealth-pa.webp" alt="Journey Cafe - right by the beach in Kailua-Kona" />
                                </div>
                                <div className="blueZone">
                                <img src="assets/images/Blue-Zones-Certified-Logo-1024x1024.webp" alt="Journey Cafe - Kailua-Kona - A BLUE ZONE Community!" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
