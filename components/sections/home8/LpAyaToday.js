import Link from "next/link"
import { useState } from 'react';
import AyahuascaTodayForm from "@/components/elements/AyahuascaTodayForm"
import LpBooking from "@/components/elements/LpBooking";

export default function ContactInfo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
          
            const handleOpenModal = () => {
              setIsModalOpen(true);
            };
          
            const handleCloseModal = () => {
              setIsModalOpen(false);
            };
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
                                                <p>Find out more about ayahuasca!</p>
                                                <p className="tsmall">Answer your questions</p>
                                            </div>
                                            <div className="icon">
                                                <span className="" />
                                            </div>
                                           
                                        </div>
                                    </li>

                                    <li className="contact-info-eight-b">
                                        <div className="inner">
                                                <div className="btn-box text-center">
                                                <a className="theme-btn btn-style-eight">
                                        <span className="btn-title" onClick={handleOpenModal}>Get This informative Book Now</span>
                                        <LpBooking isOpen={isModalOpen} onClose={handleCloseModal}> 
                                           <AyahuascaTodayForm />
                                            </LpBooking>
                                    </a>
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
