import Button from "./components/Utils/Button";
import GameBoard from "./components/GameBoard/GameBoard";
import GameMenu from "./components/GameMenu/GameMenu";
import Loading from "./components/Loading/Loading";
import { GameContextProvider } from "./components/Context/GameContext";
import { useState, useEffect } from "react";
import "./styles/App.scss"

/* Possible improvements: 
- Separate character arrays (retrieved on difficulty) with original array using slice()
- Create a separate instance of getChars() so that restarting (or changing difficulty thru main menu) gives a different array of cards evertytime the game starts over without the need to refresh the page (prob using prev card && selectedCards array)
 */

function App() {
  const [loading, setLoading] = useState(true);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const handleStartGame = () => {
    setIsStarted(true)
  }

  const handleLogo = () => {
    setIsStarted(false)
    console.log(isStarted)
  }

  return (
    <div className="App">
      {loading ? (
        <Loading />) : (
        <div className="main-content">
          <GameContextProvider>
            {!isStarted ? (
              <GameMenu handleStartGame={handleStartGame} />) : (
              <GameBoard />
            )}
            <Button name={"Hint"} />
          </GameContextProvider>
        </div>
      )}
    </div>
  );
}

export default App;

