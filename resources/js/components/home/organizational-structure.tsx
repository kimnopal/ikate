import { motion, useInView } from 'framer-motion';
import { Crown, DollarSign, FileText, Linkedin, MessageCircle, User, UserPlus, Users2, Zap } from 'lucide-react';
import React from 'react';

const OrganizationalStructure = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    const pengurus = [
        {
            nama: 'Dr. Ahmad Subeki, S.T., M.T.',
            jabatan: 'Ketua Umum',
            periode: '2023-2025',
            foto: '/images/pengurus/ketua.jpg',
            linkedin: '#',
            icon: Crown,
        },
        {
            nama: 'Ir. Sarah Wijaya, M.Eng.',
            jabatan: 'Wakil Ketua',
            periode: '2023-2025',
            foto: '/images/pengurus/wakil.jpg',
            linkedin: '#',
            icon: User,
        },
        {
            nama: 'Budi Santoso, S.T., M.T.',
            jabatan: 'Sekretaris Jenderal',
            periode: '2023-2025',
            foto: '/images/pengurus/sekjen.jpg',
            linkedin: '#',
            icon: FileText,
        },
        {
            nama: 'Rina Kusuma, S.T., M.M.',
            jabatan: 'Bendahara Umum',
            periode: '2023-2025',
            foto: '/images/pengurus/bendahara.jpg',
            linkedin: '#',
            icon: DollarSign,
        },
        {
            nama: 'Dr. Handoko Pratama, S.T., M.T.',
            jabatan: 'Koordinator Pengembangan SDM',
            periode: '2023-2025',
            foto: '/images/pengurus/sdm.jpg',
            linkedin: '#',
            icon: Zap,
        },
        {
            nama: 'Lestari Dewi, S.T., M.Sc.',
            jabatan: 'Koordinator Hubungan Alumni',
            periode: '2023-2025',
            foto: '/images/pengurus/humas.jpg',
            linkedin: '#',
            icon: Users2,
        },
    ];

    return (
        <section ref={ref} className="bg-gray-900 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="mb-6 flex justify-center"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <motion.div
                            className="rounded-full bg-green-500/10 p-4"
                            transition={{
                                duration: 3,
                                ease: 'easeInOut',
                            }}
                        >
                            <Users2 className="h-12 w-12 text-green-400" />
                        </motion.div>
                    </motion.div>
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Struktur Pengurus IKATE</h2>
                    <p className="mx-auto max-w-2xl text-gray-400">Para pemimpin yang berdedikasi untuk memajukan komunitas alumni Teknik Elektro</p>
                </motion.div>

                {/* Pengurus Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {pengurus.map((person, index) => (
                        <motion.div
                            key={index}
                            className="rounded-xl border border-gray-700 bg-gradient-to-br from-gray-800/80 to-gray-700/50 p-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                borderColor: 'rgba(16, 185, 129, 0.5)',
                            }}
                        >
                            {/* Photo Placeholder */}
                            <div className="relative mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600">
                                <span className="text-2xl font-bold text-white">{person.nama.split(' ')[0].charAt(0)}</span>
                            </div>

                            {/* Info */}
                            <div className="text-center">
                                <h3 className="mb-1 text-lg font-bold text-white">{person.nama}</h3>
                                <p className="mb-1 font-medium text-green-400">{person.jabatan}</p>
                                <p className="mb-4 text-sm text-gray-400">Periode: {person.periode}</p>

                                {/* LinkedIn Button */}
                                <motion.button
                                    className="inline-flex items-center rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.span className="mr-2" whileHover={{ rotate: 12 }} transition={{ duration: 0.2 }}>
                                        <Linkedin className="h-4 w-4" />
                                    </motion.span>
                                    LinkedIn
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <motion.div
                        className="rounded-xl border border-gray-700 bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-8"
                        whileHover={{ borderColor: 'rgba(16, 185, 129, 0.5)' }}
                    >
                        <div className="mb-4 flex justify-center">
                            <div className="rounded-full bg-green-500/10 p-3">
                                <span>
                                    <UserPlus className="h-8 w-8 text-green-400" />
                                </span>
                            </div>
                        </div>
                        <h3 className="mb-4 text-xl font-bold text-white">Ingin Bergabung dengan Kepengurusan?</h3>
                        <p className="mx-auto mb-6 max-w-2xl text-gray-300">
                            Kami selalu terbuka untuk alumni yang ingin berkontribusi aktif dalam pengembangan komunitas. Hubungi kami untuk informasi
                            lebih lanjut tentang kesempatan berpartisipasi.
                        </p>
                        <motion.button
                            className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-white"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="flex items-center justify-center space-x-2">
                                <motion.span whileHover={{ rotate: 12 }} transition={{ duration: 0.2 }}>
                                    <MessageCircle className="h-5 w-5" />
                                </motion.span>
                                <span>Hubungi Kami</span>
                            </span>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default OrganizationalStructure;
