const SearchBar = () => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="w-full rounded-xl border p-4 pr-16 outline-none"
        placeholder="Search anything here..."
      />
      <div className="absolute right-4 top-1/2 flex -translate-y-1/2 transform items-center space-x-2 text-primary-100">
        <span>⌘</span>
        <span>K</span>
      </div>
    </div>
  );
};

export default SearchBar;
