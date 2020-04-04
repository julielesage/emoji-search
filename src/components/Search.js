import React from "react";

const Search = ({ searchResult }) => {
  return (
    <div className="all-centered">
      <h1>😎 EmojiSearch 😎</h1>
      <input
        name="search"
        type="text"
        placeholder="Quel emoticone cherchez vous ?"
        onChange={(e) => {
          e.preventDefault();
          searchResult(e);
        }}
      />
    </div>
  );
};

export default Search;
