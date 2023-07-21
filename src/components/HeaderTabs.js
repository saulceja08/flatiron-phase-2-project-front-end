import React from 'react';

function HeaderTabs() {
  const imageUrl = 'https://logolook.net/wp-content/uploads/2021/08/Call-of-Duty-Logo-2011.png';

  return (
    <div className='tab-list'>
      <div className='tab-image'>
        <img src={imageUrl} alt='Tab Icon' />
      </div>
      <div className="tabs">
        <div className="tab">Search+</div>
        <div className="tab">Games+</div>
        <div className="tab">Console+</div>
        <div className="tab">Support</div>
      </div>
    </div>
  );
}

export default HeaderTabs;

