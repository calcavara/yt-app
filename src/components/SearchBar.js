import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const handleInputChange = (event) => {
        setTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={handleSubmit} className="ui form">
                <div className="field">
                    <label>Search For a Video</label>
                    <input
                        onChange={handleInputChange}
                        value={term}
                        type="text"
                        placeholder="Search for an interesting video!"
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;