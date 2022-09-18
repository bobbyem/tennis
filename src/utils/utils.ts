import { Point } from "../types/types";

//Hit or miss
export function hitOrMiss(): boolean {
  const result = Math.random() >= 0.5 ? true : false;

  return result;
}

//Calculate score
export function calcScore(currentScore: Point): Point {
  let newScore;

  //If maximum number score return
  if (currentScore === 40) {
    return 40;
  }

  //Else add to the score and map to score tuple
  const pointMap: Point[] = [0, 15, 30, 40]; //Converts number/index to tennis score

  //Get numeric score from currentScore
  let pointToNum = pointMap.indexOf(currentScore);

  //Numberic score +1
  pointToNum = pointToNum + 1;

  newScore = pointMap[pointToNum];

  return newScore;
}
