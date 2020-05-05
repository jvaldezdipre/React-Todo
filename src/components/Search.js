import React from 'react';

const Search = ({ searchChangeHandler }) => {
  return (
    <form>
      <input type='text' onChange={searchChangeHandler} />
    </form>
  );
};

export default Search;
