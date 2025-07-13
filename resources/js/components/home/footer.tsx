import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Link as LinkIcon, Mail, MessageSquare, Phone, Twitter } from 'lucide-react';
import LogoIkate from '../../../../public/images/logo-ikate.png';

const Footer = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: Linkedin,
        },
        {
            name: 'Instagram',
            icon: Instagram,
        },
        {
            name: 'Twitter',
            icon: Twitter,
        },
        {
            name: 'WhatsApp',
            icon: MessageSquare,
        },
    ];

    return (
        <footer className="border-t border-gray-800 bg-gray-900 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-4 flex items-center space-x-3">
                            {/* Logo */}
                            <img src={LogoIkate} alt="" className="w-12" />
                            <div>
                                <h3 className="text-xl font-bold text-white">IKATE</h3>
                                <p className="text-sm text-gray-400">Ikatan Alumni Teknik Elektro</p>
                            </div>
                        </div>
                        <p className="mb-6 max-w-md text-gray-400">
                            Membangun jaringan alumni yang kuat untuk masa depan teknologi Indonesia yang lebih cerah.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <motion.button
                                    key={social.name}
                                    className="rounded-lg bg-gray-800 p-2 text-gray-400"
                                    whileHover={{
                                        scale: 1.1,
                                        color: '#10b981',
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon className="h-6 w-6" />
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 flex items-center font-semibold text-white">
                            <LinkIcon className="mr-2 h-5 w-5 text-green-400" />
                            Tautan Cepat
                        </h4>
                        <ul className="space-y-2">
                            {['Alumni', 'Karir', 'Berita', 'Kontak'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        className="group flex items-center text-gray-400 transition-colors duration-300 hover:text-green-400"
                                    >
                                        <motion.span
                                            className="mr-2 h-1 w-1 rounded-full bg-green-400 opacity-0 group-hover:opacity-100"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                        />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 flex items-center font-semibold text-white">
                            <Mail className="mr-2 h-5 w-5 text-green-400" />
                            Kontak
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <motion.li className="flex items-center" whileHover={{ color: '#10b981' }}>
                                <Mail className="mr-2 h-4 w-4" />
                                info@ikate.id
                            </motion.li>
                            <motion.li className="flex items-center" whileHover={{ color: '#10b981' }}>
                                <Phone className="mr-2 h-4 w-4" />
                                +62 21 1234 5678
                            </motion.li>
                            <motion.li className="flex items-center" whileHover={{ color: '#10b981' }}>
                                <MessageSquare className="mr-2 h-4 w-4" />
                                +62 812 3456 7890
                            </motion.li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
                    <p className="flex items-center justify-center">&copy; 2024 IKATE. Semua hak cipta dilindungi.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
