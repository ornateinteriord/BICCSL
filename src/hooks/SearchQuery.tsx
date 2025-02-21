import { useState } from "react";

const useSearch = <T,>(data: T[], searchKeys: (keyof T)[]) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const normalizedQuery = searchQuery.toLowerCase().trim(); // Normalize search query

  const filteredData = data.filter((item) =>
    searchKeys.some((key) => {
      const value = item[key];

      return (
        value !== undefined &&
        value !== null &&
        String(value).toLowerCase().includes(normalizedQuery) // Convert everything to string before searching
      );
    })
  );

  return { searchQuery, setSearchQuery, filteredData };
};

export default useSearch;
