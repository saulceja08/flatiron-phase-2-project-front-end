import React, { useState } from 'react';

function HeaderTabs() {
  const imageUrl = 'https://logolook.net/wp-content/uploads/2021/08/Call-of-Duty-Logo-2011.png';

  // State to track whether the search bar is visible or not
  const [showSearchBar, setShowSearchBar] = useState(false);

  // State to store the user's search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle the click event on the "Search+" button
  const handleSearchClick = () => {
    setShowSearchBar(true);
  };

  // Function to handle changes in the search input field
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className='tab-list'>
      <div className='tab-image'>
        <img src={imageUrl} alt='Tab Icon' />
      </div>
      <div className="tabs">
        {/* "Search+" button */}
        <div className="tab" onClick={handleSearchClick}>
          Search+
        </div>

        {/* Conditional rendering for the search bar */}
        {showSearchBar && (
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
        )}

        {/* Other navigation tabs */}
        <div className="tab">Games+</div>
        <div className="tab">Console+</div>
        <div className="tab">Support</div>
      </div>
    </div>
  );
}

export default HeaderTabs;
