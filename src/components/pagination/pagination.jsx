import { useState, useEffect } from 'react';

function useScrollPagination(totalItems, itemsPerPage, threshold = 300) {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - threshold
      ) {
        if (!isLoading) {
          setIsLoading(true);
          const newPage = page + 1;
          const startIndex = (newPage - 1) * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
          const newData = totalItems.slice(startIndex, endIndex);

          if (endIndex <= totalItems.length) {
            setPage(newPage);
            setVisibleData([...visibleData, ...newData]);
            setIsLoading(false);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, page, totalItems, itemsPerPage, threshold, visibleData]);

  return { isLoading, visibleData };
}

export default useScrollPagination;
