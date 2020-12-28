import React, { useState } from 'react';
import '../index.css';

function SearchBar(props) {
    const [term, setTerm] = useState('');
    
    

    const handleChange = (e) => {
        const value = e.target.value;

        setTerm(value);
        props.notifyTermChanged(value);
    };

    const clear = function() {
        setTerm('');
        props.notifyTermChanged('');
    };

    return (
        <div>
            <label style={{ fontWeight: 'bold' }}>
                Filter tasks (by name)
                <div className='fg'>
                    <input type='text' onChange={handleChange} value={term} />
                    <button type='button' onClick={clear}>Clear</button>
                </div>
            </label>
        </div>
    );
}

export default SearchBar;
