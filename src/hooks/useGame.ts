import { useState } from "react";
import {
  defaultPlayers,
  Deuce,
  GameState,
  Player,
  Surface,
} from "../types/types";
import { calcScore, hitOrMiss } from "../utils/utils";

export default function useGame() {
  //States
  const [gameState, setGameState] = useState<GameState>(GameState.IDLE); //What state the game is in currently
  const [players, setPlayers] = useState<Player[]>(defaultPlayers);
  const [surface, setSurface] = useState<Surface>(Surface.clay); //The surface of the court
  const [cry, setCry] = useState<string | null>(null); //Used to display serve result
  const [deuce, setDeuce] = useState<Deuce>(false); //Initial value should be false
  const [currentPlayer, setCurrentPlayer] = useState<0 | 1>(0); // Initial player 0 = 1
  const [serveResult, setServeResult] = useState<"HIT" | "MISS" | null>(null); //Used for toggling CSS animation in Ball

  //Variables
  const delay = 1500; //How long timeout delays are

  //Hook functions
  //Serve - currentPlayer tries to hit
  function serve(): void {
    //Result of the serve
    let result: "HIT" | "MISS" | null;

    //State copy for updating state
    const newPlayersState = [...players];

    const player = players[currentPlayer]; //The player currently playing
    const opponent = players[currentPlayer === 0 ? 1 : 0]; // The players opponents

    //Set game as running - disables inputs
    setGameState(GameState.RUNNING);

    //Get a random result for the serve
    result = hitOrMiss() ? "HIT" : "MISS";

    //Set serveResult to trigger correct animation
    setServeResult(result);

    //Delay the handling of the result
    setTimeout(() => {
      //Sets the cry to inform player of result
      setCry(result);

      //Check if score should update
      //On MISS change current player
      if (result === "MISS") {
        //If player has advantage - remove it
        if (player.advantage) {
          //Set players advantage to false on newPlayerState
          newPlayersState[currentPlayer].advantage = false;

          //Update the state
          setPlayers([...newPlayersState]);
        }
        //If current player is 0 - set to 1 else it should be 0
        setCurrentPlayer(currentPlayer === 0 ? 1 : 0);
      }

      //On HIT checks
      if (result === "HIT") {
        //Check if player wins
        if (player.advantage || (player.score === 40 && opponent.score <= 30)) {
          //Set player winner true
          newPlayersState[currentPlayer].winner = true;

          //Update gameState, the game is over
          setGameState(GameState.OVER);

          return;
        }

        //Check if other player has 40 and if currentplayer will get 40
        if (player.score === 30 && opponent.score === 40) {
          //Set Decuce to true
          setDeuce(true);

          //Set to player score to 40
          newPlayersState[currentPlayer].score = 40;

          //Update the playerState
          setPlayers([...newPlayersState]);

          setGameState(GameState.IDLE); //Reset Gamestate to idle
          return;
        }

        //Check if players have 40 - Yes? this player gets advantage
        if (player.score === 40 && opponent.score === 40) {
          //Set player advantage to true
          newPlayersState[currentPlayer].advantage = true;

          //Update the playerState
          setPlayers([...newPlayersState]);
        }

        //Calculate and set the new score
        newPlayersState[currentPlayer].score = calcScore(player.score);

        //Update the playerState
        setPlayers([...newPlayersState]);
      }

      setGameState(GameState.IDLE); //Reset Gamestate to idle
    }, delay);
  }

  //Reset Game
  function resetGame(): void {
    //Set players to default values
    setPlayers(defaultPlayers);
  }

  //Reset cry - used by Crier Component to remove itself
  function resetCry(): void {
    setCry(null);
  }

  return {
    gameState,
    players,
    currentPlayer,
    surface,
    cry,
    deuce,
    serveResult,
    setSurface,
    serve,
    resetGame,
    resetCry,
  };
}
