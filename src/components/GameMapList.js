import React from 'react';

function GameMapList({ gameData }) {
  // Ensure gameData exists and is an array before using map
  if (!gameData || !Array.isArray(gameData)) {
    return <div>No games available</div>;
  }

  return (
    <div className='map-app'>
      {gameData.map((game) => (
        <div key={game.id}>
          <h2 className='list-text'>{game.name}</h2>
          {game.zombieMaps.map((zombieMap) => (
            <div key={zombieMap.id}>
              <h3 className='list-text'>{zombieMap.name}</h3>
              <p className='list-text'>{zombieMap.location}</p>
              <img className="map-image" src={zombieMap.image} alt={zombieMap.name} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameMapList;
