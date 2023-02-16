import { Auth0Provider } from "@bcwdev/auth0provider";
import { watchersService } from "../services/WatchersService.js";
import BaseController from "../utils/BaseController.js";


export class WatchersController extends BaseController{
  constructor(){
    super('api/watchers')
    this.router
      // Routes go here
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.becomeWatcher)
  }


  async becomeWatcher (req, res, next) {
  try {
    const user = req.userInfo
    req.body.creatorId = user.id
    const watcher = await watchersService.becomeWatcher(req.body)
    return res.send(watcher)
  } catch (error) {
    next(error)
    }
  }
}