import React from 'react';
import GameHeader from './components/GameHeader';
import GameList from './components/GameList';
import GameFooter from './components/GameFooter';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <GameHeader/>
      <div>
        <h1>Call of Duty</h1>
        <GameFooter />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GameList/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
