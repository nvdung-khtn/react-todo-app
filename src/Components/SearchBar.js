import React, {useState} from 'react';
import '../index.css';

function SearchBar(props) {

    return (
    <div>
        <label style={{fontWeight: 'bold'}}>
          Filter tasks (by name)
          <div className="fg">
            <input type="text"/>
            <button type="button">Clear</button>
          </div>
        </label>
    </div>
    );
}

export default SearchBar;