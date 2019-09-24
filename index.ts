import * as _ from "lodash";

import Gem from "./Gem";
import Gems from "./gems";

var _gems = Gems;

const minimist = require("minimist");
let args = minimist(process.argv.slice(2), {
  boolean: ["log"],
  alias: {
    v: "value",
    t: "type",
    c: "comparison",
    cr: "currency",
    random:"rand"
  }
});

if (args.t) {
  _gems = _gems.filter(x => {
    return x.name.toLowerCase().trim() === args.t.toLowerCase().trim();
  });
}

if (args.v) {
  if (args.c) {
    switch (args.c) {
      case "<=":
        _gems = _gems.filter(x =>  x.value <= args.v);
        break;
      case ">=":
        _gems = _gems.filter(x =>   x.value >= args.v);
        break;
      case "=":
        _gems = _gems.filter(x =>   x.value == args.v);
        break;
      case "<":
        _gems = _gems.filter(x =>   x.value < args.v);
        break;
      case ">":
        _gems = _gems.filter(x =>  x.value > args.v);
        break;
    }
  } else {
    _gems = _gems.filter(x =>  x.value == args.v);
  }
}

if (args.cr) {
  switch (args.cr) {
    case "G":
    case "GP":
      _gems = _gems.filter(x =>  x.valueType == "GP");
      break;
    case "S":
    case "SP":
      _gems = _gems.filter(x =>  x.valueType == "SP");
      break;
    case "C":
    case "CP":
      _gems = _gems.filter(x =>  x.valueType == "CP");
      break;
    case "E":
    case "EP":
      _gems = _gems.filter(x =>  x.valueType == "EP");
      break;
    case "P":
    case "PP":
      _gems = _gems.filter(x =>  x.valueType == "PP");
      break;
  }
}
if (args.random || args._.includes("random")) {
  for (let i = 0; i < args._[args._.indexOf('random')+1]; i++) {
    console.log(_.sample(_gems).generate());
  }
}

if (args.log || args._.includes("log")) {
  console.log(
    [
      ...new Set(
        _gems.map(x => {
          return x.name;
        })
      )
    ].length
  );
  console.log(
    _.sum(
      _gems.map(x => {
        return (
          ((x.cuts && [...new Set(x.cuts)].length) | 1) *
          ((x.variations && [...new Set(x.variations)].length) | 1)
        );
      })
    )
  );
}

