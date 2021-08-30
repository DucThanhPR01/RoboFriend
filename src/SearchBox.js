import React from 'react';
import './SearchBox.css';

const SearchBox = ({SearchFied, SearchChange} ) => {
    return (
        <div className='pa2'>
            <input 
               className='pa3 br4 ba1 b--blue bg-light-green' 
               type='search' 
               placeholder='Robot you love' 
               onChange = {SearchChange}
            />
        </div>
        
    );
}

export default SearchBox;