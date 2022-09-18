import { Deuce, Player } from "../types/types";

type Props = {
  players: Player[];
};
function ScoreBoard(props: Props) {
  const { players } = props;
  return (
    <div className="scoreboard w-max asfalt">
      <h4 className="w-full p-1 text-m m-0 text-center text-white text-uppercase">
        Player 1
      </h4>
      <h4 className="w-full p-1 text-m m-0 text-center text-white text-uppercase">
        Player 2
      </h4>
      {players.map((player, index) => (
        <h4
          key={index}
          className={`text-center text-red text-segment m-0 ${
            player.advantage ? "" : "hidden"
          }`}
        >
          ADV
        </h4>
      ))}
      {players.map((player, index) => (
        <h4 className="text-center text-l text-red text-segment">
          {player.score === 0 ? "00" : player.score}
        </h4>
      ))}
    </div>
  );
}

export default ScoreBoard;
