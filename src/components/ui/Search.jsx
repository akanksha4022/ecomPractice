const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full flex justify-center mb-10">
      <div className="flex flex-col items-center gap-3">

        <span className="text-sm text-gray-500">
          Home
        </span>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-[320px] sm:w-[400px] md:w-[500px]
                     border border-gray-300 rounded-full
                     px-6 py-3 outline-none
                     focus:ring-2 focus:ring-black"
        />
      </div>
    </div>
  );
};

export default Search;
