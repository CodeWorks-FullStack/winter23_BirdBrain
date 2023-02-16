import { query } from "express"
import { dbContext } from "../db/DbContext.js"


class BirdsService{
  async createBird(birdData) {
    const newBird = await dbContext.Birds.create(birdData)
    return newBird
  }

  async getAllBirds(){
    const birds = await dbContext.Birds.find()
    // NOTE add in additional information 
    return birds
  }
}

export const birdsService = new BirdsService()