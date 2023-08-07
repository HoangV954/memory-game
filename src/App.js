
import GameBoard from "./components/GameBoard/GameBoard";
import GameMenu from "./components/GameMenu/GameMenu";
import Loading from "./components/Loading/Loading";
import Hint from "./components/Hint/Hint";
import { GameContextProvider } from "./components/Context/GameContext";
import { useState, useEffect } from "react";
import "./styles/App.scss";

/* Possible improvements: 
- Separate character arrays (retrieved on difficulty) with original array using slice()
- Create a separate instance of getChars() so that restarting (or changing difficulty thru main menu) gives a different array of cards evertytime the game starts over without the need to refresh the page (prob using prev card && selectedCards array)
- Use audio onEnd instead of setTimeout
- Utilize more onMouseEnter/Leave for css transition
 */

function App() {
  const [loading, setLoading] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const [hintIsClicked, setHintIsClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  const handleStartGame = () => {
    setIsStarted(true)
  }

  return (
    <div className="App">
      {loading ? (
        <Loading loadingState={loading} />) : (
        <div className="main-content">
          <GameContextProvider>

            {!isStarted ? (
              <GameMenu handleStartGame={handleStartGame} setHintIsClicked={setHintIsClicked} gameState={isStarted} />) : (
              <GameBoard gameState={setIsStarted} hintIsClicked={hintIsClicked} setHintIsClicked={setHintIsClicked} />
            )}
            <Hint hintIsClicked={hintIsClicked} setHintIsClicked={setHintIsClicked} />
          </GameContextProvider>
        </div>
      )}
    </div>
  );
}

export default App;

