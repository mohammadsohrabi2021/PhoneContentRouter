import React, { useState } from 'react';
import Styles from "./Filte.module.css"

const Filter = ({filterData,setFilter }) => {
   
    const handleFilterBtn = title => {
        setFilter(title)
    }
    return (
        <div className={Styles.containerBox}>
            <div>
                filter:
            </div>
            <div className={Styles.container}>
                {filterData.map(filterBtn => (
                    <p className={Styles.child}>
                        <input  name='title' type={'radio'} onClick={() => handleFilterBtn(filterBtn.title)}/>
                        {filterBtn.title}
                    </p>
                    
                ))}
            </div>

        </div>
    );
};

export default Filter;