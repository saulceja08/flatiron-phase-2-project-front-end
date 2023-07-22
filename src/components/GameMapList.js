import React from 'react';

function GameMapList({ gameData }) {
  // Ensure gameData exists and is an array before using map
  if (!gameData || !Array.isArray(gameData)) {
    return <div>No games available</div>;
  }


  return (
    <div className='map-app'>
      {gameData.maps.map((gameMap) => (
        <div key={gameMap.maps.id}>
          <h2 className='list-text'>{gameMap.maps.name}</h2>
          <p className='list-text'>{gameMap.maps.location}</p>
          <img className="map-image" src={gameMap.maps.image} alt={gameMap.maps.name} />
        </div>
      ))}
    </div>
  );
}

export default GameMapList;
