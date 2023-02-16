import { birdWatchersService } from "../Services/BirdWatchersService.js";
import { Pop } from "../Utils/Pop.js";

export class BirdWatchersController {
  constructor() {}

  async watchBird(birdId) {
    try {
      await birdWatchersService.watchBird(birdId);
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[ERROR]", error.message);
    }
  }
}
