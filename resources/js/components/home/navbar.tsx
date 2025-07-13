import { Link, usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, Home, Mail, Menu, Newspaper, User, Users, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import LogoIkate from '../../../../public/images/logo-ikate.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { url } = usePage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [url]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navigation = [
        {
            name: 'Beranda',
            href: '/',
            icon: Home,
        },
        {
            name: 'Alumni',
            href: '/alumni',
            icon: Users,
        },
        {
            name: 'Karir',
            href: '/karir',
            icon: Briefcase,
        },
        {
            name: 'Berita',
            href: '/berita',
            icon: Newspaper,
        },
        {
            name: 'Kontak',
            href: '/kontak',
            icon: Mail,
        },
    ];

    return (
        <>
            <motion.nav
                className="sticky top-0 z-50 border-b border-gray-800 backdrop-blur-sm"
                animate={{
                    backgroundColor: isScrolled ? 'rgba(17, 24, 39, 0.95)' : 'rgba(17, 24, 39, 0.9)',
                    boxShadow: isScrolled ? '0 10px 25px -5px rgba(0, 0, 0, 0.1)' : 'none',
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <img src={LogoIkate} alt="" className="w-12" />
                            <div>
                                <h1 className="text-xl font-bold text-white">IKATE</h1>
                                <p className="text-xs text-gray-400">Ikatan Alumni Teknik Elektro</p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden items-center space-x-8 md:flex">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`group flex items-center space-x-2 font-medium transition-colors duration-200 hover:text-green-400 ${url === item.href ? 'text-green-400' : 'text-gray-300'}`}
                                    >
                                        <span>
                                            <item.icon className="h-4 w-4" />
                                        </span>
                                        <span>{item.name}</span>
                                    </Link>
                                </div>
                            ))}
                            <Link
                                href={route('login')}
                                className="group rounded-lg bg-gradient-to-r from-green-500 to-green-600 px-4 py-2 font-semibold text-white transition-all duration-200 hover:from-green-600 hover:to-green-700"
                            >
                                <span className="flex items-center justify-center space-x-2">
                                    <span>
                                        <User className="h-5 w-5" />
                                    </span>
                                    <span>Login</span>
                                </span>
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <motion.button
                                className="text-gray-300 hover:text-white"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="bg-opacity-50 fixed inset-0 z-40 bg-black/50 md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            className="fixed top-0 right-0 z-50 h-full w-80 bg-gray-900 shadow-2xl md:hidden"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <div className="flex h-full flex-col">
                                {/* Mobile Menu Header */}
                                <div className="flex items-center justify-between border-b border-gray-800 p-6">
                                    <div className="flex items-center space-x-3">
                                        <img src={LogoIkate} alt="" className="w-10" />
                                        <div>
                                            <h2 className="text-lg font-bold text-white">IKATE</h2>
                                            <p className="text-xs text-gray-400">Ikatan Alumni Teknik Elektro</p>
                                        </div>
                                    </div>
                                    <motion.button
                                        className="text-gray-400 hover:text-white"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <X className="h-6 w-6" />
                                    </motion.button>
                                </div>

                                {/* Mobile Navigation */}
                                <div className="flex-1 overflow-y-auto p-6">
                                    <nav className="space-y-4">
                                        {navigation.map((item) => (
                                            <motion.div key={item.name} whileHover={{ x: 5 }} transition={{ type: 'tween', duration: 0.2 }}>
                                                <Link
                                                    href={item.href}
                                                    className={`flex items-center space-x-3 rounded-lg px-4 py-3 font-medium transition-all duration-200 ${
                                                        url === item.href
                                                            ? 'border-l-4 border-green-400 bg-green-500/10 text-green-400'
                                                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                                    }`}
                                                >
                                                    <item.icon className="h-5 w-5" />
                                                    <span>{item.name}</span>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </nav>
                                </div>

                                {/* Mobile Login Button */}
                                <div className="border-t border-gray-800 p-6">
                                    <Link
                                        href={route('login')}
                                        className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 font-semibold text-white transition-all duration-200 hover:from-green-600 hover:to-green-700"
                                    >
                                        <User className="h-5 w-5" />
                                        <span>Login</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
