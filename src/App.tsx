import "./App.css";
import Ball from "./components/Ball";
import Court from "./components/Court";
import Crier from "./components/Crier";
import Official from "./components/Official";
import ScoreBoard from "./components/ScoreBoard";
import useGame from "./hooks/useGame";
import { GameState } from "./types/types";

function App() {
  const {
    gameState,
    players,
    currentPlayer,
    surface,
    cry,
    deuce,
    serveResult,
    setSurface,
    serve,
    resetCry,
  } = useGame();

  return (
    <div className="App gap-1">
      <div className="w-full carpet">
        <h1 className="text-segment m-0">🥎T.E.N.N.I.S</h1>
        <h2 className="text-white text-thin m-0">
          Tennis Entertainment Null Narrative Incoporated System
        </h2>
      </div>
      <div className="w-full row justify-content-center align-items-end">
        <div className="column align-items-center">
          <Official deuce={deuce} gamestate={gameState} />
          <ScoreBoard players={players} />
        </div>
      </div>
      <div className="w-full row align-items-center justify-content-center">
        <Ball
          serving={currentPlayer === 0}
          side={"left"}
          gameState={gameState}
          serveResult={serveResult}
        />
        <Court surface={surface} setSurface={setSurface} />
        <Ball
          serving={currentPlayer === 1}
          side={"right"}
          gameState={gameState}
          serveResult={serveResult}
        />
      </div>
      <button
        className="text-l p-1 mb-1"
        autoFocus
        onClick={serve}
        disabled={
          gameState === GameState.RUNNING || gameState === GameState.OVER
            ? true
            : false
        }
      >
        🎾 Serve
      </button>
      <Crier cry={cry} resetCry={resetCry} />
    </div>
  );
}

export default App;
