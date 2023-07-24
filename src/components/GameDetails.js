import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const GameDetail = () => {
  const { gameid } = useParams();

  const [gamedata, gamedatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/games/" + gameid)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not OK');
        }
        return res.json();
      })
      .then((resp) => {
        gamedatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [gameid]);

  return (
    <div>
      <div className="container">
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-title">
            <h2>Game Details</h2>
          </div>
          <div className="card-body">
            {Object.keys(gamedata).length !== 0 ? ( // Check if gamedata is not empty
              <div>
                <h2>Game Name: <b>{gamedata.name}</b> ({gamedata.id})</h2>
                <h3>Details</h3>
                <h5>Release Date: {gamedata.dateReleased}</h5> {/* Correct the property name */}
                <h5>Image: {gamedata.image}</h5>
                <Link className="btn btn-danger" to="/">Back to Listing</Link>
              </div>
            ) : (
              <p>Loading game data...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
