import { motion } from 'framer-motion';
import { Filter, Grid, List, Search, SortAsc, SortDesc, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FilterState {
    search: string;
    graduation_year: string;
    concentration: string;
    location: string;
    company: string;
    sort_by: string;
    sort_order: 'asc' | 'desc';
}

interface SearchAndFilterProps {
    filters: FilterState;
    onFilterChange: (filters: FilterState) => void;
    viewMode: 'grid' | 'list';
    onViewModeChange: (mode: 'grid' | 'list') => void;
}

const SearchAndFilter = ({ filters, onFilterChange, viewMode, onViewModeChange }: SearchAndFilterProps) => {
    const [showFilters, setShowFilters] = useState(false);
    const [activeFilters, setActiveFilters] = useState(0);

    const graduationYears = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
    const concentrations = [
        'Teknik Tenaga Listrik',
        'Teknik Elektronika',
        'Teknik Komputer',
        'Teknik Telekomunikasi',
        'Teknik Kontrol',
        'Teknik Biomedis',
    ];
    const locations = ['Jakarta', 'Bandung', 'Surabaya', 'Medan', 'Semarang', 'Yogyakarta', 'Batam', 'Balikpapan'];
    const companies = ['PLN (Persero)', 'Telkom Indonesia', 'Gojek', 'Indosat Ooredoo', 'Schneider Electric', 'Siloam Hospitals'];

    useEffect(() => {
        const count = Object.values(filters).filter((value) => value && value !== 'name' && value !== 'asc').length;
        setActiveFilters(count);
    }, [filters]);

    const handleFilterChange = (key: keyof FilterState, value: string) => {
        onFilterChange({ ...filters, [key]: value });
    };

    const clearAllFilters = () => {
        onFilterChange({
            search: '',
            graduation_year: '',
            concentration: '',
            location: '',
            company: '',
            sort_by: 'name',
            sort_order: 'asc',
        });
    };

    return (
        <div className="py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Search Bar */}
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="relative flex-1">
                        <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Cari alumni berdasarkan nama..."
                            className="w-full rounded-lg border border-gray-600 bg-gray-700 py-3 pr-4 pl-10 text-white placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none"
                            value={filters.search}
                            onChange={(e) => handleFilterChange('search', e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Filter Toggle */}
                        <motion.button
                            className="flex items-center gap-2 rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white hover:bg-gray-600"
                            onClick={() => setShowFilters(!showFilters)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Filter className="h-4 w-4" />
                            <span>Filter</span>
                            {activeFilters > 0 && (
                                <span className="ml-1 rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">{activeFilters}</span>
                            )}
                        </motion.button>

                        {/* View Mode Toggle */}
                        <div className="flex rounded-lg border border-gray-600 bg-gray-700 p-1">
                            <button
                                className={`rounded px-3 py-2 ${viewMode === 'grid' ? 'bg-green-500 text-white' : 'text-gray-400 hover:text-white'}`}
                                onClick={() => onViewModeChange('grid')}
                            >
                                <Grid className="h-4 w-4" />
                            </button>
                            <button
                                className={`rounded px-3 py-2 ${viewMode === 'list' ? 'bg-green-500 text-white' : 'text-gray-400 hover:text-white'}`}
                                onClick={() => onViewModeChange('list')}
                            >
                                <List className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filter Panel */}
                {showFilters && (
                    <motion.div
                        className="rounded-lg border border-gray-600 bg-gray-700/80 p-6 backdrop-blur-sm"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {/* Graduation Year Filter */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">Angkatan</label>
                                <select
                                    className="w-full rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none"
                                    value={filters.graduation_year}
                                    onChange={(e) => handleFilterChange('graduation_year', e.target.value)}
                                >
                                    <option value="">Semua Angkatan</option>
                                    {graduationYears.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Concentration Filter */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">Konsentrasi</label>
                                <select
                                    className="w-full rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none"
                                    value={filters.concentration}
                                    onChange={(e) => handleFilterChange('concentration', e.target.value)}
                                >
                                    <option value="">Semua Konsentrasi</option>
                                    {concentrations.map((concentration) => (
                                        <option key={concentration} value={concentration}>
                                            {concentration}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Location Filter */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">Lokasi</label>
                                <select
                                    className="w-full rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none"
                                    value={filters.location}
                                    onChange={(e) => handleFilterChange('location', e.target.value)}
                                >
                                    <option value="">Semua Lokasi</option>
                                    {locations.map((location) => (
                                        <option key={location} value={location}>
                                            {location}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Company Filter */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">Perusahaan</label>
                                <select
                                    className="w-full rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none"
                                    value={filters.company}
                                    onChange={(e) => handleFilterChange('company', e.target.value)}
                                >
                                    <option value="">Semua Perusahaan</option>
                                    {companies.map((company) => (
                                        <option key={company} value={company}>
                                            {company}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Sort Options */}
                        <div className="mt-4 flex flex-col gap-4 border-t border-gray-600 pt-4 md:flex-row md:items-center md:justify-between">
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-gray-300">Urutkan berdasarkan:</span>
                                <select
                                    className="rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none"
                                    value={filters.sort_by}
                                    onChange={(e) => handleFilterChange('sort_by', e.target.value)}
                                >
                                    <option value="name">Nama</option>
                                    <option value="graduation_year">Angkatan</option>
                                    <option value="company">Perusahaan</option>
                                    <option value="location">Lokasi</option>
                                </select>
                                <button
                                    className="flex items-center gap-2 rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-white hover:bg-gray-700"
                                    onClick={() => handleFilterChange('sort_order', filters.sort_order === 'asc' ? 'desc' : 'asc')}
                                >
                                    {filters.sort_order === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
                                    <span>{filters.sort_order === 'asc' ? 'A-Z' : 'Z-A'}</span>
                                </button>
                            </div>

                            {/* Clear Filters */}
                            {activeFilters > 0 && (
                                <button
                                    className="flex items-center gap-2 rounded-lg border border-red-600 bg-red-600/10 px-4 py-2 text-red-400 hover:bg-red-600/20"
                                    onClick={clearAllFilters}
                                >
                                    <X className="h-4 w-4" />
                                    <span>Hapus Semua Filter</span>
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default SearchAndFilter;
export type { FilterState };
