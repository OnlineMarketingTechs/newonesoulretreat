import Link from "next/link"
import { useState } from 'react';
import LpBooking from "@/components/elements/LpBooking";
import BookingformLP from "@/components/elements/BookingformLP";

export default function Welcome() {
    const [isModalOpen, setIsModalOpen] = useState(false);
          
            const handleOpenModal = () => {
              setIsModalOpen(true);
            };
          
            const handleCloseModal = () => {
              setIsModalOpen(false);
            };
    return (
        <>
            <section className="welcome-section-eight">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="welcome-image-box-eight">
                                <div className="thm-shape" style={{ backgroundImage: 'url(assets/images-3/shape/thm-shape-1.png)' }} />
                                <div className="inner">
                                <img src="/assets/images/background/one-soul-retreats-happy-visitors.webp" alt="happy-people-at-ayahuasca-retreat-in-Costa-Rica" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="welcome-content-eight">
                                <div className="sec-title style-eight">
                                    <h2>Heal, grow, and change with One Soul Retreats</h2>
                                    {/* <h4>Welcome to One Soul Retreats</h4> */}
                                </div>
                                <div className="inner">
                                    <h3>One Soul Retreats offers ayahuasca-based,</h3>
                                    <p>comprehensive transformation programs recognized around the world for safety when working with ayahuasca and other plant based medicines. Enjoy luxurious amenities in a setting designed to give you a safe, beautiful and productive place to heal and grow. One Soul Retreats, the perfect place to experience the profound change you've been seeking, with results that last.</p>
                                    <div className="authorized">
                                        <div className="left">
                                  
                                        </div>
                                        <div className="text">
                                            <h3>Book Your Journey Now</h3>

                                        </div>
                                    </div>
                                    <div className="btn-box mgT">
                                
                                    <a className="theme-btn btn-style-eight">
                                        <span className="btn-title" onClick={handleOpenModal}>Book Now</span>
                                        <LpBooking isOpen={isModalOpen} onClose={handleCloseModal}> 
          <BookingformLP />
        </LpBooking>
                                    </a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
