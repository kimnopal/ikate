import type { Alumni } from '@/components/alumni/alumni-card';
import AlumniHeader from '@/components/alumni/alumni-header';
import AlumniList from '@/components/alumni/alumni-list';
import SearchAndFilter, { FilterState } from '@/components/alumni/search-and-filter';
import Footer from '@/components/home/footer';
import Navbar from '@/components/home/navbar';
import { mockAlumni } from '@/data/alumni-data';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

// Main Alumni Component
const Alumni: React.FC = () => {
    const [filters, setFilters] = useState<FilterState>({
        search: '',
        graduation_year: '',
        concentration: '',
        location: '',
        company: '',
        sort_by: 'name',
        sort_order: 'asc',
    });

    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 12;

    // Filter and sort alumni
    const filteredAlumni = mockAlumni
        .filter((alumni) => {
            const matchesSearch =
                alumni.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                alumni.current_job.toLowerCase().includes(filters.search.toLowerCase()) ||
                alumni.company.toLowerCase().includes(filters.search.toLowerCase());

            const matchesYear = !filters.graduation_year || alumni.graduation_year.toString() === filters.graduation_year;
            const matchesConcentration = !filters.concentration || alumni.concentration === filters.concentration;
            const matchesLocation = !filters.location || alumni.location === filters.location;
            const matchesCompany = !filters.company || alumni.company === filters.company;

            return matchesSearch && matchesYear && matchesConcentration && matchesLocation && matchesCompany;
        })
        .sort((a, b) => {
            const aValue = a[filters.sort_by as keyof Alumni];
            const bValue = b[filters.sort_by as keyof Alumni];

            if (filters.sort_order === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });

    const totalPages = Math.ceil(filteredAlumni.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentAlumni = filteredAlumni.slice(startIndex, startIndex + itemsPerPage);

    const handleFilterChange = (newFilters: FilterState) => {
        setFilters(newFilters);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Head title="Alumni - IKATE" />

            <div className="min-h-screen bg-gray-900">
                <Navbar />

                {/* Background Pattern */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}
                        />
                    </div>

                    <div className="relative z-10">
                        <AlumniHeader />

                        <SearchAndFilter filters={filters} onFilterChange={handleFilterChange} viewMode={viewMode} onViewModeChange={setViewMode} />

                        <AlumniList
                            alumni={currentAlumni}
                            viewMode={viewMode}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            itemsPerPage={itemsPerPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Alumni;
