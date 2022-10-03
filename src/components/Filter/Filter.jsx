import React from 'react';
const filterData = [
    { id: 1, title: 'allData' },
    { id: 2, title: 'favoriteData' },
    { id: 3, title: 'unfavoriteData' },
]
const Filter = ({setFilter}) => {
    const handleFilterBtn = title => {
        setFilter(title)
    }
    return (
        <div>
        <div>
            filter:
        </div>
        <div>
            {filterData.map(filterBtn => (
                <p>
                    <input  name='title' type={'radio'} onClick={() => handleFilterBtn(filterBtn.title)}/>
                    {filterBtn.title}
                </p>
                
            ))}
        </div>

    </div>
    );
};

export default Filter;