import { appState } from "../AppState.js";
import { Bird } from "../Models/Bird.js";
import { Watcher } from "../Models/Watcher.js";
import { server } from "./AxiosService.js";

class BirdsService {
  async setActiveBird(birdId) {
    console.log("BIRDID", birdId);
    let bird = appState.birds.find((bird) => bird.id == birdId);
    console.log("SETTING ACTIVE BIRD", bird);
    appState.activeBird = bird;

    // NOTE CREATED A NEW FUNCTION, THEN CALLED THE FUNCTION IN THE SETACTIVE
    await this.getWatcherByBirdId(birdId);
  }

  //
  async getWatcherByBirdId(birdId) {
    const res = await server.get(`api/birds/${birdId}/watchers`);
    console.log("BIRD WATCHERS FOR THIS BIRD", res.data);
    appState.watchers = res.data.map((watcher) => new Watcher(watcher));
    // appState.emit("watchers");
  }

  async reportBird(birdBody) {
    const res = await server.post("api/birds", birdBody);
    console.log("CREATING BIRD", res.data);
    appState.birds.push(new Bird(res.data));
    appState.emit("birds");
  }
  async getBirds() {
    const res = await server.get("api/birds");
    console.log("GETTING BIRDS", res.data);
    appState.birds = res.data.map((bird) => new Bird(bird));
    console.log("GOT BIRDS", appState.birds);
  }
}

export const birdsService = new BirdsService();
