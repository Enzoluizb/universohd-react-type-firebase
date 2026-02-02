import { useMemo, useState } from "react";

export function usePagination<T>(items: T[], itemsPerPage: number = 8) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = useMemo(() => {
        return Math.max(1, Math.ceil(items.length / itemsPerPage));
    }, [items.length, itemsPerPage]);

    const clampedPage = Math.min(Math.max(1, currentPage), totalPages);

    const start = (clampedPage - 1) * itemsPerPage;
    const displayedItems = items.slice(start, start + itemsPerPage);

    return {
        displayedItems,
        currentPage,
        setCurrentPage,
        totalPages,
    };
}
