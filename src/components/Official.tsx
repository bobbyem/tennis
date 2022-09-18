import React from "react";
import { Deuce, GameState } from "../types/types";
type Props = {
  deuce: Deuce;
  gamestate: GameState;
};
function Official(props: Props) {
  const { deuce, gamestate } = props;

  return (
    <div className={`text-l column align-items-center`}>
      <div
        className={`speech-bubble ${
          !deuce && gamestate !== GameState.OVER ? "hidden" : ""
        }`}
      >
        {deuce && gamestate !== GameState.OVER ? "Deuce" : "We have a Winner"}
      </div>
      <h2 className="m-0">👨‍⚖️</h2>
    </div>
  );
}

export default Official;
