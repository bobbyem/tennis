import React from "react";
import { GameState } from "../types/types";
type Props = {
  serving: boolean;
  side: string;
  serveResult: "HIT" | "MISS" | null;
  gameState: GameState;
};
function Ball(props: Props) {
  const { serving, side, gameState, serveResult } = props;

  //Create animation className string
  const animationClass = `serve-${side}-${
    serveResult ? serveResult.toLowerCase() : ""
  }`;

  return (
    <h1
      className={`text-l ${!serving ? "hidden" : ""} ${
        serveResult && gameState === GameState.RUNNING ? animationClass : ""
      }`}
    >
      🥎
    </h1>
  );
}

export default Ball;
