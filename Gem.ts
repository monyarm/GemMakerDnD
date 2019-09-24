import * as _ from "lodash";
export default class Gem {
  variations?: string[];
  cuts?: string[];
  name: string;
  value: number;
  valueType: string;

  constructor(
    _name: string,
    _value: number,
    _valueType: string,
    _variations: string[] | undefined = undefined,
    _cuts: string[] | undefined = undefined
  ) {
    if (_variations != undefined) {
      this.variations = _variations;
    }
    if (_cuts != undefined) {
      this.cuts = _cuts;
    }
    this.name = _name;
    this.value = _value;
    this.valueType = _valueType;
  }
  generate() {
    var ret: string = "";
    ret += this.variations ? _.sample(this.variations) + " " : "";
    ret += this.cuts ? _.sample(this.cuts) + " " : "";
    ret += this.name + " ";
    ret += " - " + this.value + " " + this.valueType;
    ret = ret.replace("  ", " ").trim();
    return ret;
  }
}
