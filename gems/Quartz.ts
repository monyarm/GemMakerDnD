import Gem from "../Gem";
import {smoothCuts,facetedCuts,roughCuts,bead,sliced,cabochon} from "../utils/cuts"
export const Agate = new Gem("Agate", 10, "GP", [
  "Banded",
  "Eye",
  "Fire",
  "Frost",
  "Moss",
  "Translucent Moss",
  "Tiger Eye",
  "Hawk Eye",
  "Onyx",
  "Fairburn",
  "Lake Superior",
  "Thunder Egg",
  "Denritic",
  "Condor",
  "Botswana",
  "Coyamito",
  "Plume",
  "Enhydro",
  "Polyhedroid",
  "Crazy Lace",
  "Sagenite"
],[...smoothCuts,...roughCuts]);

export const IrisAgate = new Gem("Iris Agate", 2, "GP",undefined,[...smoothCuts,...roughCuts,...bead,...sliced,...cabochon]);
export const Turritella = new Gem("Turritella", 8, "SP",undefined,[...smoothCuts,...roughCuts,...bead,...sliced,...cabochon]);

export const Algae = new Gem("Algae", 10, "GP", undefined, [...smoothCuts,...roughCuts,...bead,...sliced,...cabochon]);

export const Amethyst = new Gem("Amethyst", 100, "GP", [
  "Pale Violet",
  "Rose Violet",
  "Blue Violet",
  "Dark Violet",
  "Lavender Blue"
], [...roughCuts,...facetedCuts,...sliced,...smoothCuts,...cabochon,...bead,...sliced]);

export const Aventurine = new Gem(
  "Aventurine",
  50,
  "GP",
  [
    "Green",
    "Orange",
    "Brown",
    "Yellow",
    "Blue",
    "Grey",
    "Red",
    "Blue-Gree",
    "Orange-Brown",
    "Orange-Yellow",
    "Yellow-Brown",
    "Blue-Grey",
    "Orange-Red"
  ],
  [...smoothCuts,...roughCuts,...bead,...cabochon,...sliced]
);
