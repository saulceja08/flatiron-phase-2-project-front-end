import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


const GameList = ({ gameData }) => {
  // Ensure gameData exists and is an array before using map
  if (!gameData || !Array.isArray(gameData)) {
    return <div>No games available</div>;
  }

  return (
    <div className='container-fluid'>
      {gameData.map((game) => (
        <div key={game.id}>
          <h2>{game.name}</h2>
          <p>{game.dateReleased}</p>
          <img src={game.image} alt={game.name} />
        </div>
      ))}
    </div>
  );
};

export default GameList;
