import Gem from "../Gem";

import {facetedCuts,smoothCuts,cabochon,bead,sliced,roughCuts} from "../utils/cuts"

export const Aquamarine = new Gem("Aquamarine", 500, "GP", [
  "Cyan",
  "Pale Blue",
  "Blue-Green",
  "Bright Blue"
], [...facetedCuts,...smoothCuts,...cabochon,...bead,...sliced,...roughCuts]);

export const Maxixe = new Gem("Maxixe", 500, "GP", ["Deep Blue"], [...facetedCuts,...smoothCuts,...cabochon,...bead,...sliced,...roughCuts]);
