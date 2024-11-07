import { useCharacterStore } from "../store/characterStore";

function Pagination() {
  const {
    currentPage,
    maxPage,
    setPage,
    fetchCharacters,
    nextUrl,
    prevUrl,
    status,
    gender,
  } = useCharacterStore();

  const handlePageChange = (page: number) => {
    setPage(page);
    fetchCharacters(status, gender, page);
  };

  const handleNextPage = () => {
    if (nextUrl) {
      setPage(currentPage + 1);
      fetchCharacters(status, gender, undefined, nextUrl);
    }
  };

  const handlePrevPage = () => {
    if (prevUrl) {
      setPage(currentPage - 1);
      fetchCharacters(status, gender, undefined, prevUrl);
    }
  };

  const pageNumbers = [];
  if (currentPage > 2) pageNumbers.push(currentPage - 1);
  pageNumbers.push(currentPage);
  if (currentPage < maxPage) pageNumbers.push(currentPage + 1);

  return (
    <footer className="flex justify-center mt-8 mb-6 space-x-2">
      {prevUrl && (
        <button
          className="py-2 px-4 rounded-md bg-purple-700 text-white"
          onClick={handlePrevPage}
        >
          Prev
        </button>
      )}

      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`py-2 px-4 rounded-md ${
            currentPage === page
              ? "bg-purple-700 text-white"
              : "bg-gray-600 text-gray-300"
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}

      {nextUrl && (
        <button
          className="py-2 px-4 rounded-md bg-purple-700 text-white"
          onClick={handleNextPage}
        >
          Next
        </button>
      )}
    </footer>
  );
}

export default Pagination;
