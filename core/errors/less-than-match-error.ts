import { MatchError } from "./match-error";

export class LessThanMatchError extends MatchError {

  public constructor(actualValue: number, upperLimit: number, shouldMatch: boolean) {
    super(actualValue, upperLimit, `Expected ${actualValue} ${!shouldMatch ? "not ": ""}to be less than ${upperLimit}.`);
  }
}
