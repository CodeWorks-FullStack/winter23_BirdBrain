import { appState } from "../AppState.js";
import { server } from "./AxiosService.js";

class BirdWatchersService {
  async watchBird(birdId) {
    let res = await server.post("api/watchers", { birdId });
    console.log("WATCHING BIRD", res.data);
    let bird = appState.birds.find((bird) => bird.id == birdId);
    if (bird) {
      bird.watchCount++;
    }
    appState.emit("birds");
  }
}

export const birdWatchersService = new BirdWatchersService();
