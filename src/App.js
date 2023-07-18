import GameHeader from "./components/GameHeader";
import GameList from "./components/GameList";
import GameFooter from "./components/GameFooter";
import { useEffect } from "react";

function App() {
  //fetch data using GET request and handle errors
  useEffect(() => {
    fetch('http://localhost:3000/game')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        // Handle the retrieved data
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error.message);
      });
  }, []);

  return (
    <>
      <GameHeader />
      <GameList />
      <GameFooter />
    </>
  );
}

export default App;
