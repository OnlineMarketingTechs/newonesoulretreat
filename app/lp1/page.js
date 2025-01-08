'use client';
import { useState } from 'react';
import Layout from "@/components/layout/Layout"
import Lp2 from "@/components/sections/home8/Lp2"
import Choose from "@/components/sections/home8/Choose"
import Funfacts from "@/components/sections/home8/Funfacts"
import Service from "@/components/sections/home8/Service"
import TestimonialLP from "@/components/sections/home8/TestimonialLP"
import Welcome from "@/components/sections/home8/Welcome"

import LpAyaToday from "@/components/sections/home8/LpAyaToday"
import LpBooking from "@/components/elements/LpBooking"; // Import the Modal component
import Bookingform from "@/components/elements/Bookingform"; // Import your BookingForm

// export const metadata = {
//     title: 'One Soul Retreats - The #1 Provider of Ayahuasca Retreats in the World',
//     description: 'One Soul Retreats is the #1 provider of Ayahuasca retreats in the world. Our retreats provide safe & supportive containers to dive deeply into your healing.',
// }

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    return (
        <>
            <Layout headerStyle={7} footerStyle={7} wrapperCls="home_8">
                <Lp2 />
                            <LpAyaToday /> 
                            
                            <Welcome />

                            <Service />

                            <Choose />

                            <TestimonialLP />

                            <Funfacts />
                            
                            <button onClick={handleOpenModal}>Book Now</button> {/* Button to trigger the modal */}

        <LpBooking isOpen={isModalOpen} onClose={handleCloseModal}> 
          <Bookingform />
        </LpBooking>
                </Layout>
        </>
    )
}