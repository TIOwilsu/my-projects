import { AbstractHandler } from "./AbstractHandler";

export class DogHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === "MeatBall") {
      return `Dog: I'll eat the ${request}`;
    }

    return super.handle(request);
  }
}
