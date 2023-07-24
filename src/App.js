import React, { useState, useEffect } from 'react';
import GameHeader from './components/GameHeader';
import GameList from './components/GameList';
import GameFooter from './components/GameFooter';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
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
    <div>
      <GameHeader gameData={gameData} />
      <div>
        <h1>Call of Duty</h1>
        <GameList gameData={gameData} />
        <GameFooter />
      </div>
    </div>
  );
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<GameList/>}>

      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
