import React from "react";

import { FaSearch } from "react-icons/fa";

const SearchCatalog = (props) => {
  return (
    <form className="filters-search mb-3">
      <div className="form-group">
        <i className="feather-search">
          <FaSearch />
        </i>
        <input type="text" className="form-control" placeholder="Поиск" />
      </div>
    </form>
  );
};

export default SearchCatalog;
