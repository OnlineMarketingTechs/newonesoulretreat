import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"


export default function Service() {
    return (
        <>
            <section className="service-section-home13" style={{ backgroundImage: 'url(assets/images/background/journey-sour-dough-pocket-video-background.webp)' }}>
                <div className="auto-container">
                    <div className="sec-title-two text-center light">
                        <h6><span className="coloSet">Artisan Local Farm To Table</span></h6>
                        <h2>We love what we do, its our passion. <br />Come share our love and the true spirit of aloha!</h2>
                    </div>
                    
                     <div className="video-section-home13 service-block">
                            <div className="wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                <VideoPopup style={3}/>
                                    </div>
                                </div>
                            </div>
                </div>

                    

            </section>
        </>
    )
}
