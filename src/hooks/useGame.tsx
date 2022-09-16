import { useState } from "react";
import { Player } from "../types/types";

export default function useGame() {
  const [players, setPlayers] = useState<Player[]>();
}
