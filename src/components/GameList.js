import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GameList() {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/games")
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
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Game Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="games/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Date Released</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {gameData &&
                gameData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.dateReleased}</td>
                    <td>
                      <Link
                        to={`/detail/${item.id}`}
                        className="btn btn-primary"
                      >
                        Details
                      </Link>
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
