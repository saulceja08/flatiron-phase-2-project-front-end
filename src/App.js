import React, { useState, useEffect } from 'react';
import GameHeader from './components/GameHeader';
import GameList from './components/GameList';
import GameFooter from './components/GameFooter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/games')
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
    <div className='container-fluid'>
      <GameHeader />
      {/* Pass the gameData as a prop to GameList component */}
      <GameList gameData={gameData} />
      <GameFooter />
    </div>
  );
}

export default App;
