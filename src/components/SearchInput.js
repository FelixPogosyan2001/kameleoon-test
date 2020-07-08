import React, { useState, useEffect } from 'react';
import '../css/App.css'

function SearchInput({ changeData, data }) {
    const [inputValue, setValue] = useState('');

    useEffect(() => {
        const newData = [];

        for (let tool of data) {
            if (inputValue && inputValue.toLowerCase() === tool.name.slice(0, inputValue.length).toLowerCase()) {
                newData.push(tool);
            }
        }
        
        if (!inputValue) changeData(data);
        else changeData(newData);
        
        
    }, [inputValue]);

    return (
        <div className="search">
            <i className="search__icon fas fa-search"></i>
            <input value={inputValue} onChange={(e) => setValue(e.target.value)} className="search__input" />
        </div>
    );
}

export default React.memo(SearchInput, () => true);