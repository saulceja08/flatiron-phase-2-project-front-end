import React from 'react'

function SearchBar() {
  return (
    <div className="search">
      <div className='search-input'>
        <input type="text"placeholder='Search...'/>
        <div className="searchIcon"></div>
      </div> 
    </div>
  )
}

export default SearchBar