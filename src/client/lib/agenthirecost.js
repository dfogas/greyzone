/*
  Number -> Number
*/
export default function(rank) {
  if (rank === 1)
    return 10;

  if (rank === 2)
    return 20;

  if (rank === 3)
    return 40;

  if (rank === 4)
    return 80;

  if (rank === 5)
    return 160;

  if (rank === 6)
    return 320;

  if (rank === 7)
    return 640;

  if (rank === 8)
    return 1280;

  if (rank === 9)
    return 2560;

  if (rank === 10)
    return 5120;
}
