import React from 'react';

const Search = ({search,setSearch}) => {
      // search
      const handleSearch = e =>{
         setSearch(e.target.value)
      }
 
    return (
        <div>
            <input  value={search} onChange={handleSearch} placeholder='Search...' />
        </div>
    );
};

export default Search;