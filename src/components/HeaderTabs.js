import React from 'react';
import SearchBar from './SearchBar';


function HeaderTabs({gameData}) {
  const imageUrl = 'https://logolook.net/wp-content/uploads/2021/08/Call-of-Duty-Logo-2011.png';

  return (
    <div className='tab-list'>
      <div className='tab-image'>
        <img src={imageUrl} alt='Tab Icon' />
      </div>
      <div className="tabs">
        <SearchBar gameData={gameData} placeholder="Search for ..."/>
        <div className='tab'>Games+</div>
        <div className='tab'>Consoles+</div>
        <div className='tab'>Support+</div>
      </div>
    </div>
  );
}

export default HeaderTabs;


