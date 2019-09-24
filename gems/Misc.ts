import Gem from "../Gem";
var permutations = require("../utils/permutations.js");

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
        "Bright Green Malachite Banded ",
        "Dark Green Malachite Banded ",
        "Blackish Green Malachite Banded ",
        "Yellowish-Green Malachite Banded "
      ],
      ["Azure Blue", "Deep Blue", "Pale Blue", "Dark Blue"]
    )
    .map((x: string[]) => {
      return (x[0] + x[1]).replace("  ", " ").trim();
    }),
  ["Cabochon", "Tumbled Smooth"]
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
        "Bright Green Banded ",
        "Dark Green Banded ",
        "Blackish Green Banded ",
        "Yellowish-Green Banded ",
        "Azure Blue Azurite Banded ",
        "Dark Blue Azurite Banded ",
        "Deep Blue Azurite Banded ",
        "Pale Blue Azurite Banded "
      ],
      ["Bright Green", "Dark Green", "Blackish Green", "Yellowish-Green"]
    )
    .map((x: string[]) => {
      return (x[0] + x[1]).replace("  ", " ").trim();
    }),
  ["Cabochon", "Tumbled Smooth"]
);
