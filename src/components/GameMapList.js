import React, { useState, useEffect } from "react";

function GameMapList() {
  // Ensure gameData exists and is an array before using map
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    fetch("https://saulceja08-flatiron-phase-2-back-end.onrender.com/games")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        // Store the fetched data in state
        setGameData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []);

  if (!gameData || !Array.isArray(gameData) || gameData.length === 0) {
    return <div>No games available</div>;
  }

  return (
    <div className="game-app">
      {gameData.map((game) => (
        <div key={game.id} className="game-card">
          <h2 className="list-text">{game.name}</h2>
          <p className="list-text">{game.dateReleased}</p>
          <img className="game-image" src={game.image} alt={game.name} />
        </div>
      ))}
    </div>
  );
}

export default GameMapList;
