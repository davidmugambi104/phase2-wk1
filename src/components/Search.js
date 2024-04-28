import React from "react";

function Search({ onSearch }) {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm); // Call the onSearch function with the search term
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
