import React from 'react';

const GameList = ({ gameData }) => {
  // Ensure gameData exists and is an array before using map
  if (!gameData || !Array.isArray(gameData)) {
    return <div>No games available</div>;
  }

  return (
    <div className='game-app'>
      {gameData.map((game) => (
        <div key={game.id}>
          <h2 className='list-text'>{game.name}</h2>
          <p className='list-text'>{game.dateReleased}</p>
          <img className="game-image" src={game.image} alt={game.name} />
        </div>
      ))}
    </div>
  );
};

export default GameList;
