import { MatchError } from "./match-error";

export class ContentsMatchError extends MatchError {

  public constructor(actualValue: any, expectedContent: any, shouldMatch: boolean) {
    super(actualValue, expectedContent, `Expected ${JSON.stringify(actualValue)} ${!shouldMatch ? "not ": ""}to contain ${JSON.stringify(expectedContent)}.`);
  }
}
