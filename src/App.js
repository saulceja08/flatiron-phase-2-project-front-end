import React from 'react';
import GameHeader from './components/GameHeader';
import GameList from './components/GameList';
import GameCreate from './components/GameCreate';
import GameDetails from './components/GameDetails';
import GameEdit from './components/GameEdit';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <GameHeader/>
      <div>
        <h1>Call of Duty</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GameList/>}></Route>
          <Route path='/games/create' element={<GameCreate/>}></Route>
          <Route path='/games/edit/gameid' element={<GameEdit/>}></Route>
          <Route path='/detail/:gameid' element={<GameDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
