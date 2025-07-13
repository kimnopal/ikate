import Footer from '@/components/home/footer';
import Navbar from '@/components/home/navbar';
import { Head } from '@inertiajs/react';
import { Clock, Hammer } from 'lucide-react';
import React from 'react';

interface PublicComingSoonProps {
    title?: string;
    description?: string;
    pageTitle?: string;
}

const PublicComingSoon: React.FC<PublicComingSoonProps> = ({
    title = 'Fitur Sedang Dikembangkan',
    description = 'Halaman ini masih dalam tahap pengembangan',
    pageTitle = 'Coming Soon - IKATE',
}) => {
    return (
        <>
            <Head title={pageTitle} />

            <div className="min-h-screen bg-gray-900">
                <Navbar />

                {/* Background Pattern */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}
                        />
                    </div>

                    {/* Hero Section */}
                    <div className="relative z-10 px-4 py-16">
                        <div className="mx-auto max-w-6xl">
                            {/* Main Hero Content */}
                            <div className="mb-16 space-y-8 text-center">
                                <div className="space-y-6">
                                    <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full">
                                        <Hammer className="h-16 w-16 text-white" />
                                    </div>

                                    <div className="space-y-4">
                                        <h1 className="text-4xl leading-tight font-bold text-white md:text-5xl">{title}</h1>
                                        <p className="mx-auto max-w-2xl text-xl text-gray-300">{description}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center space-x-3 text-emerald-400">
                                    <Clock className="h-6 w-6" />
                                    <span className="text-lg font-medium">Segera hadir untuk Anda</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default PublicComingSoon;
