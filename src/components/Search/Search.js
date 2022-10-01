import React from 'react';
import Styles from "./Search.module.css"
const Search = ({ handleSearch, search }) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.title}>
                Search:
            </div>
            <input className={Styles.input} value={search} onChange={handleSearch} placeholder='Search...' />
        </div>
    );
};

export default Search;