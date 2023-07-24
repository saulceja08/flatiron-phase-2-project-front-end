import React from 'react';
import GameHeader from './components/GameHeader';
import GameList from './components/GameList';
import GameCreate from './components/GameCreate';
import GameDetails from './components/GameDetails';
import GameEdit from './components/GameEdit';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import GameMapList from './components/GameMapList';

function App() {
  return (
    <div>
      <GameHeader/>
      <div>
        <h1 className='tempheader'>Info Page</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GameList/>}></Route>
          <Route path='/games/create' element={<GameCreate/>}></Route>
          <Route path='/games/edit/:gameid' element={<GameEdit/>}></Route>
          <Route path='/detail/:gameid' element={<GameDetails/>}></Route>
        </Routes>
      </BrowserRouter>
      <GameMapList />
    </div>
  );
}

export default App;
