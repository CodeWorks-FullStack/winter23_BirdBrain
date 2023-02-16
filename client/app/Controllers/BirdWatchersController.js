import { appState } from "../AppState.js";
import { Watcher } from "../Models/Watcher.js";
import { birdWatchersService } from "../Services/BirdWatchersService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawWatchers() {
  let template = "";
  appState.watchers.forEach((watcher) => (template += watcher.watcherFace));
  setHTML("watchers", template);
}

export class BirdWatchersController {
  constructor() {
    appState.on("watchers", _drawWatchers);
  }

  async watchBird(birdId) {
    try {
      await birdWatchersService.watchBird(birdId);
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[ERROR]", error.message);
    }
  }

  // async getWatcherByBirdId(birdId) {
  //   try {

  //   } catch (error) {
  //     console.error(error)
  //    // @ts-ignore
  //     Pop.error(('[ERROR]'), error.message)
  //   }
  // }
}
