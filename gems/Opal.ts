import Gem from "../Gem";
import {smoothCuts,roughCuts,sliced,cabochon} from "../utils/cuts";
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
  [...smoothCuts,...roughCuts,...sliced,...cabochon]
);
export const Opal50 = new Gem(
  "Opal",
  50,
  "GP",
  ["Hydrophane"],
  [...smoothCuts,...roughCuts,...sliced,...cabochon]
);
