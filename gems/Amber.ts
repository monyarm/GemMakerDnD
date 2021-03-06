var permutations = require("../utils/permutations.js");
import Gem from "../Gem";

import {
  roughCuts,
  facetedCuts,
  smoothCuts,
  cabochon,
  bead,
  sliced
} from "../utils/cuts";

export const Amber = new Gem(
  "Amber",
  100,
  "GP",
  permutations
    .product(
      [
        "Orange ",
        "Yellow ",
        "Yellowish-Orange ",
        "Yellowish-Brown ",
        "Golden Brown ",
        "Black ",
        "Red ",
        "Yellowish-Black ",
        "White ",
        "Yellowish-White ",
        "Pale Yellow ",
        "Green ",
        "Blue ",
        "Yellowish-Green ",
        "Transparent "
      ],
      [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Insect Fossil",
        "Plant Fossil"
      ]
    )
    .map((x: string[]) => {
      return (x[0] + x[1]).replace("  ", " ").trim();
    }),
  [...roughCuts, ...facetedCuts, ...smoothCuts, ...cabochon, ...bead, ...sliced]
);
