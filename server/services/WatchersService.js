import { dbContext } from "../db/DbContext.js"

class WatchersService {
  async getWatchersByBirdId(birdId) {
    const watchers = await dbContext.Watchers.find({ birdId }).populate('creator', 'name picture')
    return watchers
  }
  async becomeWatcher(watcherData) {
    const watcher = await dbContext.Watchers.create(watcherData)
    return watcher
  }

}

export const watchersService = new WatchersService()