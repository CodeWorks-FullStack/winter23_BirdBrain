import { appState } from "../AppState.js";
import { Bird } from "../Models/Bird.js";
import { server } from "./AxiosService.js";

class BirdsService {
  setActiveBird(birdId) {
    console.log("BIRDID", birdId);
    let bird = appState.birds.find((bird) => bird.id == birdId);
    console.log("SETTING ACTIVE BIRD", bird);
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
