import { AuthController } from "./Controllers/AuthController.js";
import { BirdsController } from "./Controllers/BirdsController.js";
import { BirdWatchersController } from "./Controllers/BirdWatchersController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  authController = new AuthController();
  valuesController = new ValuesController();
  birdsController = new BirdsController();
  birdWatchersController = new BirdWatchersController();
}

// @ts-ignore
window.app = new App();
