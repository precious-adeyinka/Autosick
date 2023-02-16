const FilterBox = () => {
  return (
    // grey bg rounded with with small white circles and black borders next to text in a column
    <div className="w-full md:w-1/5 bg-gray-100 rounded-2xl p-5 h-1/2">
      <h1 className="text-lg font-medium text-slate-400 mb-5">Forum Filters</h1>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-white rounded-full border border-grey"></div>
          <p className="text-sm text-black">All</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-white rounded-full border border-grey"></div>
          <p className="text-sm text-black">General</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-white rounded-full border border-grey"></div>
          <p className="text-sm text-black">News</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-white rounded-full border border-grey"></div>
          <p className="text-sm text-black">Events</p>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
