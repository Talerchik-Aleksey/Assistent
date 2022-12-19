import { isUndefined } from "util"

export function isOneOfThisUndefined(...args: any[]): boolean {
  for (
    let argumentNumber = 0;
    argumentNumber < arguments.length;
    argumentNumber++
  ) {
    if (isUndefined(args[argumentNumber])) return true
  }
  return false
}
