import React from 'react';
import Styles from "./Navbar.module.css";
import Search from '../Search/Search'

const Navbar =()=> {
     return (
        <div className={Styles.container}> 
          <Search/>
          <button>Add User</button>
        </div>
    );
}

export default Navbar;