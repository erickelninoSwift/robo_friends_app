import React from "react";

export const SearchBox = ({ getSearchInput }) => {
  return (
    <div className="pa3">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="enter robot name"
        onChange={(e) => getSearchInput(e.target.value)}
      />
    </div>
  );
};
