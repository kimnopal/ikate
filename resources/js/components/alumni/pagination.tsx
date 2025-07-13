import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <div className="flex items-center justify-center gap-2">
            <button
                className="rounded-lg border border-gray-600 bg-gray-700 p-2 text-white hover:bg-gray-600 disabled:opacity-50"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                <ArrowLeft className="h-4 w-4" />
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    className={`rounded-lg px-4 py-2 ${
                        page === currentPage ? 'bg-green-500 text-white' : 'border border-gray-600 bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}

            <button
                className="rounded-lg border border-gray-600 bg-gray-700 p-2 text-white hover:bg-gray-600 disabled:opacity-50"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                <ArrowRight className="h-4 w-4" />
            </button>
        </div>
    );
};

export default Pagination;
