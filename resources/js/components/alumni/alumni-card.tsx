import { motion } from 'framer-motion';
import { Briefcase, Calendar, Linkedin, Mail, MapPin } from 'lucide-react';

interface Alumni {
    id: number;
    name: string;
    photo: string;
    graduation_year: number;
    concentration: string;
    current_job: string;
    company: string;
    location: string;
    bio: string;
    linkedin: string;
    email: string;
    phone: string;
    skills: string[];
    verified: boolean;
}

interface AlumniCardProps {
    alumni: Alumni;
    viewMode: 'grid' | 'list';
}

const AlumniCard = ({ alumni, viewMode }: AlumniCardProps) => {
    if (viewMode === 'list') {
        return (
            <motion.div
                className="rounded-lg border border-gray-700 bg-gray-800/80 p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex items-center gap-6">
                    {/* Photo */}
                    <div className="relative">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600">
                            <span className="text-2xl font-bold text-white">
                                {alumni.name
                                    .split(' ')
                                    .map((n) => n[0])
                                    .join('')}
                            </span>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white">{alumni.name}</h3>
                                <p className="text-green-400">{alumni.current_job}</p>
                                <p className="text-gray-400">{alumni.company}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-400">Angkatan {alumni.graduation_year}</p>
                                <p className="text-gray-400">{alumni.concentration}</p>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-6 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{alumni.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Briefcase className="h-4 w-4" />
                                <span>{alumni.company}</span>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-2">
                            <button className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600">
                                <Linkedin className="h-4 w-4" />
                            </button>
                            <button className="rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white hover:bg-gray-600">
                                <Mail className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            className="rounded-lg border border-gray-700 bg-gray-800/80 p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            {/* Photo */}
            <div className="relative mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600">
                <span className="text-2xl font-bold text-white">
                    {alumni.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                </span>
            </div>

            {/* Info */}
            <div className="text-center">
                <h3 className="mb-1 text-lg font-bold text-white">{alumni.name}</h3>
                <p className="mb-1 text-green-400">{alumni.current_job}</p>
                <p className="mb-2 text-gray-400">{alumni.company}</p>

                <div className="mb-3 flex justify-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{alumni.graduation_year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{alumni.location}</span>
                    </div>
                </div>

                <p className="mb-4 text-sm text-gray-300">{alumni.concentration}</p>

                <div className="mb-4 flex flex-wrap justify-center gap-2">
                    {alumni.skills.slice(0, 3).map((skill, index) => (
                        <span key={index} className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="flex justify-center gap-2">
                    <button className="rounded-lg bg-green-500 p-2 text-white hover:bg-green-600">
                        <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="rounded-lg border border-gray-600 bg-gray-700 p-2 text-white hover:bg-gray-600">
                        <Mail className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default AlumniCard;
export type { Alumni };
