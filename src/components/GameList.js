import React from 'react';

const GameList = ({ gameData }) => {
  // Ensure gameData exists and is an array before using map
  if (!gameData || !Array.isArray(gameData)) {
    return <div>No games available</div>;
  }

  return (
    <div>
      {gameData.map(game => (
        <div key={game.id}>
          <h2>{game.name}</h2>
          <p>{game.dateReleased}</p>
          {/* Add any other game details you want to display */}
        </div>
      ))}
    </div>
  );
};

export default GameList;
