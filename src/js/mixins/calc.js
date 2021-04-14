import COSTS from "../config/calculator";

export const getCost = (power) => {
  const powers = Object.keys(COSTS)
    .map((el) => Number(el))
    .sort((a, b) => a > b);

  return powers.reduce((acc, current) => {
    if (power > current) {
      return COSTS[current];
    }
    return acc;
  }, COSTS[powers[0]]);
};
