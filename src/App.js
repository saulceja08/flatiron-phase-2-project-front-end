import React, { useState, useEffect } from 'react';
import GameHeader from './components/GameHeader';
import GameList from './components/GameList';
import GameFooter from './components/GameFooter';

function App() {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/game')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        // Store the fetched data in state
        setGameData(data);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }, []);

  return (
    <>
      <GameHeader data={gameData} />
      <GameList data={gameData} />
      <GameFooter data={gameData} />
    </>
  );
}

export default App;