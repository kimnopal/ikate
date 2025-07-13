import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Building2, Search, TrendingUp, UserPlus, Users2 } from 'lucide-react';

const HeroSection = () => {
    const stats = [
        {
            number: '1,500+',
            label: 'Alumni Terdaftar',
            icon: Users2,
        },
        {
            number: '95%',
            label: 'Tingkat Penempatan Kerja',
            icon: TrendingUp,
        },
        {
            number: '50+',
            label: 'Perusahaan Partner',
            icon: Building2,
        },
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 py-32 lg:px-44">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    className="absolute top-20 left-10 h-72 w-72 rounded-full bg-green-400 mix-blend-multiply blur-xl filter"
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute top-40 right-10 h-72 w-72 rounded-full bg-blue-400 mix-blend-multiply blur-xl filter"
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-1/2 h-72 w-72 rounded-full bg-purple-400 mix-blend-multiply blur-xl filter"
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 4,
                    }}
                />
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Badge */}
                    <motion.div
                        className="mb-8 inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="mr-2 text-sm font-medium text-green-400">🎓</span>
                        <span className="text-sm font-medium text-green-400">Komunitas Alumni Terdepan</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        className="mb-6 text-4xl leading-tight font-bold text-white md:text-6xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Membangun Jaringan
                        <motion.span
                            className="block bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            Alumni Teknik Elektro
                        </motion.span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-gray-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        IKATE adalah wadah yang menghubungkan para alumni Teknik Elektro UNSOED untuk saling berbagi pengalaman, peluang karir, dan
                        membangun masa depan teknologi Indonesia yang lebih cerah.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col justify-center gap-4 sm:flex-row"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.button
                            className="group rounded-lg bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href={route('register')} className="flex items-center justify-center space-x-2">
                                <motion.span whileHover={{ rotate: 12 }} transition={{ duration: 0.2 }}>
                                    <UserPlus className="h-5 w-5" />
                                </motion.span>
                                <span>Daftar Sekarang</span>
                            </Link>
                        </motion.button>
                        <motion.button
                            className="group rounded-lg border-2 border-green-500 px-8 py-4 font-semibold text-green-400"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href={route('alumni')} className="flex items-center justify-center space-x-2">
                                <motion.span whileHover={{ rotate: 12 }} transition={{ duration: 0.2 }}>
                                    <Search className="h-5 w-5" />
                                </motion.span>
                                <span>Cari Alumni</span>
                            </Link>
                        </motion.button>
                    </motion.div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="group text-center"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                            >
                                <div className="mb-4 flex justify-center">
                                    <div className="rounded-full bg-green-500/10 p-3">
                                        <stat.icon className="h-8 w-8 text-green-400" />
                                    </div>
                                </div>
                                <div className="mb-2 text-3xl font-bold text-green-400">{stat.number}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
