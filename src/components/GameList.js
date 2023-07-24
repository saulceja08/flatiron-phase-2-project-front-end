import React, { useEffect, useState } from 'react';

function GameList() {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        // Store the fetched data in state
        setGameData(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }, []);

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
                <th>id</th>
                <th>name</th>
                <th>dateReleased</th>
                <th>consoles</th>
                <th>action</th>
              </tr>
              </thead>
            <tbody>
              {gameData &&
                gameData.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.dateReleased}</td>
                    <td>{item.image}</td>
                    <td>
                      <button className='btn btn-success'>Edit</button>
                      <button className='btn btn-danger'>Remove</button>
                      <button className='btn btn-primary'>Details</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default GameList;


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