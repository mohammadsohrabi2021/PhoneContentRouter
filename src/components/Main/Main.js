import React from 'react';
import Styles from "./Main.module.css";
import Navbar from '../Navbar/Navbar';

function Main() {

    return (
        <div className={Styles.container}>

            <Navbar />
        </div>
    );

}

export default Main;