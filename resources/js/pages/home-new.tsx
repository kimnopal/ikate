import Footer from '@/components/home/footer';
import HeroSection from '@/components/home/hero-section';
import Navbar from '@/components/home/navbar';
import OrganizationalStructure from '@/components/home/organizational-structure';
import VisionMission from '@/components/home/vision-mission';
import { Head } from '@inertiajs/react';
import React from 'react';

// Main Home Component
const HomeNew: React.FC = () => {
    return (
        <>
            <Head title="IKATE - Ikatan Alumni Teknik Elektro" />

            <div className="min-h-screen bg-gray-900">
                <Navbar />
                <HeroSection />
                <VisionMission />
                <OrganizationalStructure />
                <Footer />
            </div>
        </>
    );
};

export default HomeNew;
