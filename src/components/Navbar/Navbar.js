import React from 'react';
import Styles from "./Navbar.module.css";
import Form from '../FormData/FormData';
const Navbar =()=> {
     return (
        <div className={Styles.container}> 
            <Form />
        </div>
    );
}

export default Navbar;