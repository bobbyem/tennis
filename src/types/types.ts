//Types Etc
export enum GameState {
  gameRunning,
  gameOver,
}

export type Player = {
  score: number;
  advantage: boolean;
  winner: boolean;
};

//Default variables
export const defaultPlayer: Player = {
  score: 0,
  advantage: false,
  winner: false,
};

export const defaultPlayers: Player[] = [defaultPlayer, defaultPlayer];
