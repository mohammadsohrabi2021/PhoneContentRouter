import React from 'react';
import styles from './Filter.module.scss'
const filterData = [
    { id: 1, title: 'allData' },
    { id: 2, title: 'favoriteData' },
    { id: 3, title: 'unfavoriteData' },
]
const Filter = ({ setFilter }) => {
    const handleFilterBtn = title => {
        setFilter(title)
    }

    return (
        <div className={styles.container}>
            <div className={styles.iconFilter}>
            <i class="fa-solid fa-filter"></i>
            </div>
            <div className={styles.filter}>
                {filterData.map(filterBtn => (
                    <p className={styles.childFilter}>
                        <input name='title' type={'radio'} onClick={() => handleFilterBtn(filterBtn.title)} />
                        {filterBtn.title}
                    </p>

                ))}
            </div>

        </div>
    );
};

export default Filter;