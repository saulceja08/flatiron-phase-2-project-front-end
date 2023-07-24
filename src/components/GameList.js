import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
          <div>
            <Link className='btn btn-success'>Add New(+)</Link>
          </div>
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
                    <td>{item.consoles ? item.consoles.join(', ') : 'N/A'}</td> {/* Check if consoles exists */}
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
