import Gem from "../Gem";
import {smoothCuts,roughCuts} from "../utils/cuts";
export const Opal1000 = new Gem(
  "Opal",
  1000,
  "GP",
  [
    "White",
    "Fire",
    "Water",
    "Black",
    "Yellow",
    "Red",
    "Orange",
    "Green",
    "Brown",
    "Pink",
    "Blue"
  ],
  [...smoothCuts,...roughCuts]
);
export const Opal50 = new Gem(
  "Opal",
  50,
  "GP",
  ["Hydrophane"],
  [...smoothCuts,...roughCuts]
);
