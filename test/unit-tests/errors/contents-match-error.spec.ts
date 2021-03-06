import { ContentsMatchError } from "../../../core/errors/contents-match-error";
import { Expect, TestCase } from "../../../core/alsatian-core";

export class EqualMatchErrorTests {

   @TestCase([], 1)
   @TestCase([ 1, 2 ], 42)
   @TestCase("", "something")
   @TestCase("something", "another thing")
   public shouldMatchMessage(container: any, expectedContent: any) {
      let error = new ContentsMatchError(container, expectedContent, true);

      Expect(error.message).toBe("Expected " + JSON.stringify(container) + " to contain " + JSON.stringify(expectedContent) + ".");
   }

   @TestCase([ 1 ], 1)
   @TestCase([ 1, 42 ], 42)
   @TestCase("something", "something")
   @TestCase("something", "thing")
   public shouldNotMatchMessage(container: any, expectedContent: any) {
      let error = new ContentsMatchError(container, expectedContent, false);

      Expect(error.message).toBe("Expected " + JSON.stringify(container) + " not to contain " + JSON.stringify(expectedContent) + ".");
   }
 }
