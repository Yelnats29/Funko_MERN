import { useState } from 'react';
import './searchbar.css'

const SearchBar = ({onSearch, results}) => {
    const [search, setSearch] = useState('');


    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearch(value);
        onSearch(value);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleInputChange}
            />
            {results.length > 0}
        </div>
    );
};

export default SearchBar;