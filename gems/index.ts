import * as _ from "lodash";
import Gem from "../Gem";

import * as Quartz from "./Quartz";
import * as Tektite from "./Tektite";
import * as Chrysoberyl from "./Chrysoberyl";
import * as Amber from "./Amber";
import * as Realms from "./Realms";
import * as Misc from "./Misc";
import * as Coral from "./Coral";
import * as Beryl from "./Beryl";
import * as Opal from "./Opal";
import * as Diamond from "./Diamond";

var GemsArray: any = [
  Quartz,
  Tektite,
  Chrysoberyl,
  Amber,
  Realms,
  Misc,
  Coral,
  Beryl,
  Opal,
  Diamond
];
var Gems: Gem[] = Object["values"](_.merge(...(GemsArray as [Gem])));

export default Gems;
