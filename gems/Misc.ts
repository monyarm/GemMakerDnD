import Gem from "../Gem";
var permutations = require("../utils/permutations.js");
import {smoothCuts} from "../utils/cuts";
// (Andalusite)
export const Andar = new Gem("Andar", 50, "GP", [
  "Pink",
  "Violet",
  "Yellow",
  "Green",
  "White",
  "Gray",
  "Green-Red",
  "Brown-Red"
]);

// (Clinozoisite)
export const Alestone = new Gem("Alestone", 50, "GP", [
  "Brown",
  "Yellowish-Brown",
  "Yellowish-Green",
  "Yellow",
  "Collourless",
  "Greenish",
  "Pale Rose-Red",
  "Gray"
]);

export const Augelite = new Gem("Andar", 10, "GP", [
  "Colorless",
  "White",
  "Yellowish",
  "Pale Rose",
  "Greenish"
]);

export const Azurite = new Gem(
  "Azurite",
  10,
  "GP",
  permutations
    .product(
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
        "Bright Green Malachite ",
        "Dark Green Malachite ",
        "Blackish Green Malachite ",
        "Yellowish-Green Malachite "
      ],["Banded ","Spotted ","Speckled "],
      ["Azure Blue", "Deep Blue", "Pale Blue", "Dark Blue"]
    )
    .map((x: string[]) => {
      return (x[0] + x[1]).replace("  ", " ").trim();
    }),
  [...smoothCuts]
);

export const Malachite = new Gem(
  "Malachite",
  10,
  "GP",
  permutations
    .product(
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
        "Bright Green ",
        "Dark Green ",
        "Blackish Green ",
        "Yellowish-Green ",
        "Azure Blue Azurite ",
        "Dark Blue Azurite ",
        "Deep Blue Azurite ",
        "Pale Blue Azurite "
      ],["Banded ","Spotted ","Speckled "],
      ["Bright Green", "Dark Green", "Blackish Green", "Yellowish-Green"]
    )
    .map((x: string[]) => {
      return (x[0] + x[1]).replace("  ", " ").trim();
    }),
  [...smoothCuts]
);
