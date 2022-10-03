import React from 'react';
import styles from './Search.module.scss'
const Search = ({search,setSearch}) => {
      // search
      const handleSearch = e =>{
         setSearch(e.target.value)
      }
 
    return (
        <div className={styles.inputSearch}>
            <input  value={search} onChange={handleSearch} placeholder='Search...' />
        </div>
    );
};

export default Search;