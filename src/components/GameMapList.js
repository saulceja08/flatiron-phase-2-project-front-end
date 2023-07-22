import React from 'react';

function GameMapList({ zombieMaps }) {
  // Ensure zombieMaps exists and is an array before using map
  if (!zombieMaps || !Array.isArray(zombieMaps)) {
    return <div>No maps available</div>;
  }

  return (
    <div className='map-app'>
      {zombieMaps.map((zombieMap) => (
        <div key={zombieMap.id}>
          <h3 className='list-text'>{zombieMap.name}</h3>
          <p className='list-text'>{zombieMap.location}</p>
          <img className="map-image" src={zombieMap.image} alt={zombieMap.name} />
        </div>
      ))}
    </div>
  );
}

export default GameMapList;