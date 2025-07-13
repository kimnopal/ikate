import { User } from 'lucide-react';
import AlumniCard, { Alumni } from './alumni-card';
import Pagination from './pagination';

interface AlumniListProps {
    alumni: Alumni[];
    viewMode: 'grid' | 'list';
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

const AlumniList = ({ alumni, viewMode, currentPage, totalPages, itemsPerPage, onPageChange }: AlumniListProps) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, alumni.length);

    return (
        <section className="py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Results Info */}
                <div className="mb-8 flex items-center justify-between">
                    <p className="text-gray-400">
                        Menampilkan {startIndex + 1}-{endIndex} dari {alumni.length} alumni
                    </p>
                </div>

                {/* Alumni Grid/List */}
                {alumni.length > 0 && (
                    <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
                        {alumni.map((alumniItem) => (
                            <AlumniCard key={alumniItem.id} alumni={alumniItem} viewMode={viewMode} />
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {alumni.length === 0 && (
                    <div className="py-12 text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-800/80 backdrop-blur-sm">
                            <User className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-white">Tidak ada alumni ditemukan</h3>
                        <p className="text-gray-400">Coba sesuaikan filter pencarian Anda</p>
                    </div>
                )}

                {/* Pagination */}
                {alumni.length > 0 && totalPages > 1 && (
                    <div className="mt-12 flex justify-center">
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default AlumniList;
