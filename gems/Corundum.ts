import Gem from "../Gem";
var permutations = require("../utils/permutations.js");

import { facetedCuts, roughCuts, cabochon, smoothCuts } from "../utils/cuts";

export const Sapphire = new Gem(
  "Sapphire",
  1000,
  "GP",

  permutations
    .product(
      ["", "", "", "Pale ", "Pale ", "Deep "],
      [
        "Blue",
        "Blue-Green",
        "Cyan",
        "Light Blue",
        "Green",
        "Pink",
        "Yellow",
        "Orange",
        "Violet",
        "Purple",
        "Blue-Violet",
        "Blue-Purple"
      ],
      ["", " Star"]
    )
    .map((x: string[]) => {
      return (x[0] + x[1]).replace("  ", " ").trim();
    }),
  [...facetedCuts, ...roughCuts, ...cabochon, ...smoothCuts]
);

export const Padparacha = new Gem("Padparacha", 1000, "GP", undefined, [
  ...facetedCuts,
  ...roughCuts,
  ...cabochon,
  ...smoothCuts
]);
export const BlackSapphire = new Gem(
  "Sapphire",
  5000,
  "GP",
  ["Black", "Black Star"],
  [...facetedCuts, ...roughCuts, ...cabochon, ...smoothCuts]
);
