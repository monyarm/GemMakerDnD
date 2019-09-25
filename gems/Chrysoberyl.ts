import Gem from "../Gem";

import {facetedCuts,smoothCuts,bead} from "../utils/cuts"

export const Alexandrite = new Gem("Alexandrite", 500, "GP",undefined,[...facetedCuts]);
export const Chrysoberyl = new Gem("Chrysoberyl", 100, "GP", [
  "Yellow-Green",
  "Pale Green",
  "Green",
  "Yellow",
  "Greenish-Black",
  "Pale Yellow"
],[...smoothCuts,...bead]);
export const CatsEye = new Gem("Cat's Eye", 100, "GP",undefined,[...smoothCuts,...bead]);
