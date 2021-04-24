import COSTS from "../config/calculator";

export const getCost = (power) => {
  const powers = Object.keys(COSTS)
    .map((el) => Number(el))
    .sort((a, b) => a > b);

  const firstSmallerFoundPower = powers.find((el) => power <= el);

  return firstSmallerFoundPower
    ? COSTS[firstSmallerFoundPower]
    : COSTS[powers[powers.length - 1]];
};
