import { Search } from "lucide-react";

const SearchIcon = () => {
  return (
    <div className="flex space-x-2">
      <button data-testid="search-icon" className="flex h-10 w-10">
        <Search />
      </button>
    </div>
  );
};

export default SearchIcon;
