import React from 'react'

function GameList() {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-title'>
          <h2>Call of Duty: Games</h2>
        </div>
        <div className='card-body'>
          <table className='table-bordered'>
            <thead className='bg-dark text-white'>
              <tr>
                <td>id</td>
                <td>name</td>
                <td>details</td>
                <td>image</td>
                <td>action</td>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default GameList

/*import React from 'react';
import GameMapList from './GameMapList';

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
          <GameMapList zombieMaps={game.zombieMaps} />
        </div>
      ))}
    </div>
  );
};

export default GameList;
*/