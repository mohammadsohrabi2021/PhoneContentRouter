import React, { useState } from 'react';
import styles from './Filter.module.scss'
const filterData = [
    { id: 1, title: 'allData' ,name:'AllData'},
    { id: 2, title:true ,name:'favoriteData'},
    { id: 3, title: false ,name:'unfavoriteData'},
]
const Filter = ({ setFilter }) => {
    const handleFilterBtn = title => {
        setFilter(title)
    }

const[showfilter,setShowfilter]=useState('none')
const[showIconBack , setShowIconBack]=useState('none')
const[showIconfilter , setShowIconfilter]=useState('flex')
const handleClickFilter =() =>{
    setShowfilter('flex')
    setShowIconBack('flex')
    setShowIconfilter('none')

}
const handleDisFilter =()=>{
    setShowfilter('none')
    setShowIconBack('none')
    setShowIconfilter('flex')
}
    return (
        <div className={styles.container}>
            <div className={styles.iconFilter} >
                <i onClick={handleClickFilter} style={{display:showIconfilter}} class="fa-solid fa-filter"></i>
                <i onClick={handleDisFilter} style={{display:showIconBack}} class="fa-solid fa-arrow-left"></i>
            </div>
            <div className={styles.filter}>
                {filterData.map(filterBtn => (
                    <p className={styles.childFilter} style={{display:showfilter}}>
                        <input name='title' type={'radio'} onClick={() => handleFilterBtn(filterBtn.title)} />
                        {filterBtn.name}
                    </p>

                ))}
            </div>

        </div>
    );
};

export default Filter;