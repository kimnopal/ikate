import { motion, useInView } from 'framer-motion';
import { Briefcase, CheckCircle, Eye } from 'lucide-react';
import React from 'react';

const VisionMission = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="bg-gray-800 py-20">
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
                        <div className="rounded-full bg-green-500/10 p-4">
                            <Briefcase className="h-12 w-12 text-green-400" />
                        </div>
                    </motion.div>
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Visi & Misi IKATE</h2>
                    <p className="mx-auto max-w-2xl text-gray-400">Komitmen kami dalam membangun ekosistem alumni yang kuat dan berkelanjutan</p>
                </motion.div>

                <div className="grid gap-12 md:grid-cols-2">
                    {/* Visi */}
                    <motion.div
                        className="rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        whileHover={{
                            scale: 1.05,
                            borderColor: 'rgba(16, 185, 129, 0.5)',
                        }}
                    >
                        <motion.div
                            className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-green-500/10"
                            whileHover={{ scale: 1.2 }}
                        >
                            <motion.span whileHover={{ rotate: 12 }} transition={{ duration: 0.2 }}>
                                <Eye className="h-8 w-8 text-green-400" />
                            </motion.span>
                        </motion.div>
                        <motion.h3 className="mb-4 text-2xl font-bold text-white" whileHover={{ color: '#10b981' }}>
                            Visi
                        </motion.h3>
                        <p className="leading-relaxed text-gray-300">
                            Menjadi organisasi alumni Teknik Elektro terdepan yang berperan aktif dalam pengembangan teknologi dan sumber daya manusia
                            di Indonesia, serta menjadi jembatan antara dunia akademik dan industri.
                        </p>
                    </motion.div>

                    {/* Misi */}
                    <motion.div
                        className="rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{
                            scale: 1.05,
                            borderColor: 'rgba(16, 185, 129, 0.5)',
                        }}
                    >
                        <motion.div
                            className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-green-500/10"
                            whileHover={{ scale: 1.2 }}
                        >
                            <motion.span whileHover={{ rotate: 12 }} transition={{ duration: 0.2 }}>
                                <CheckCircle className="h-8 w-8 text-green-400" />
                            </motion.span>
                        </motion.div>
                        <motion.h3 className="mb-4 text-2xl font-bold text-white" whileHover={{ color: '#10b981' }}>
                            Misi
                        </motion.h3>
                        <ul className="space-y-3 text-gray-300">
                            {[
                                'Memfasilitasi networking dan kolaborasi antar alumni',
                                'Mendukung pengembangan karir dan kompetensi alumni',
                                'Berkontribusi dalam kemajuan teknologi dan inovasi',
                                'Membangun sinergitas dengan almamater dan industri',
                            ].map((mission, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <motion.span
                                        className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-400"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [1, 0.7, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.2,
                                        }}
                                    />
                                    <span>{mission}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
