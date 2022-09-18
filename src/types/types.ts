//Types Etc
export enum GameState {
  IDLE, //Waiting for player input
  RUNNING, //Used to disable players input
  OVER, //Used to disable game - wait for reset
}

export enum Surface {
  carpet = 0, //Blue
  grass, //Green
  asfalt, //Black
  clay, //Red
  __LENGTH,
}

export type Point = 0 | 15 | 30 | 40; //Standard tennis point numbering

export type Deuce = boolean; //To set if both players have 3+ points

export type Player = {
  score: Point; //The number of points 0-40
  advantage: boolean; //If this player is in the lead while deuce is true
  winner: boolean; //If true gameover this player won
};

//Default variables
export const defaultPlayer: Player = {
  score: 0,
  advantage: true,
  winner: false,
};

export const defaultPlayers: Player[] = [
  {
    score: 0,
    advantage: false,
    winner: false,
  },
  {
    score: 0,
    advantage: false,
    winner: false,
  },
];
