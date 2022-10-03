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
        <div >
            <div>
                filter:
            </div>
            <div className={styles.filter}>
                {filterData.map(filterBtn => (
                    <p>
                        <input name='title' type={'radio'} onClick={() => handleFilterBtn(filterBtn.title)} />
                        {filterBtn.title}
                    </p>

                ))}
            </div>

        </div>
    );
};

export default Filter;