import React from 'react';
import SearchBar from './SearchBar';
import Games from './Games';
import Consoles from './Games';
import Support from './Support';

function HeaderTabs() {
  const imageUrl = 'https://logolook.net/wp-content/uploads/2021/08/Call-of-Duty-Logo-2011.png';

  return (
    <div className='tab-list'>
      <div className='tab-image'>
        <img src={imageUrl} alt='Tab Icon' />
      </div>
      <div className="tabs">
        <SearchBar/>
        <Games/>
        <Consoles/>
        <Support/>
      </div>
    </div>
  );
}

export default HeaderTabs;


