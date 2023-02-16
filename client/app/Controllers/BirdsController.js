import { appState } from "../AppState.js";
import { Bird } from "../Models/Bird.js";
import { birdsService } from "../Services/BirdsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawBirds() {
  let template = "";
  appState.birds.forEach((bird) => (template += bird.birdCardTemplate));
  setHTML("birds", template);
}

// DRAW ACTIVE BIRD

export class BirdsController {
  constructor() {
    console.log("HELLO FROM THE BIRDS CONTROLLER");
    this.getBirds();
    appState.on("birds", _drawBirds);
  }

  async getBirds() {
    try {
      let birds = await birdsService.getBirds();
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[ERROR]", error.message);
    }
  }

  getBirdForm() {
    setHTML("birdContent", Bird.createBirdForm());
  }

  async reportBird() {
    try {
      window.event.preventDefault();
      let form = window.event.target;
      let birdBody = getFormData(form);
      console.log("CREATING BIRD", birdBody);
      if (birdBody.canFly == "on") {
        birdBody.canFly = true;
      } else {
        birdBody.canFly = false;
      }
      await birdsService.reportBird(birdBody);
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[ERROR]", error.message);
    }
  }

  setActive(birdId) {
    try {
      birdsService.setActiveBird(birdId);
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[ERROR]", error.message);
    }
  }
}
