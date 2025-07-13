import { motion } from 'framer-motion';
import { Building2, MapPin, Users } from 'lucide-react';

const AlumniHeader = () => {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <motion.div
                        className="mb-6 flex justify-center"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="rounded-full bg-green-500/10 p-4">
                            <Users className="h-12 w-12 text-green-400" />
                        </div>
                    </motion.div>

                    <motion.h1
                        className="mb-4 text-4xl font-bold text-white md:text-5xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Direktori Alumni
                    </motion.h1>

                    <motion.p
                        className="mx-auto max-w-2xl text-xl text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Temukan dan terhubung dengan sesama alumni Teknik Elektro dari berbagai angkatan dan bidang keahlian
                    </motion.p>

                    <motion.div
                        className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-green-400" />
                            <span>1,500+ Alumni</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-green-400" />
                            <span>200+ Perusahaan</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-green-400" />
                            <span>50+ Kota</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AlumniHeader;
