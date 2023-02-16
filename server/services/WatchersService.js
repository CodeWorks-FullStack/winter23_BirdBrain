import { dbContext } from "../db/DbContext.js"

class WatchersService{
  async becomeWatcher(watcherData) {
    const watcher = await dbContext.Watchers.create(watcherData)
    return watcher
  }

}

export const watchersService = new WatchersService()