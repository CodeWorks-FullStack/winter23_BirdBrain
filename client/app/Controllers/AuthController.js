import { appState } from "../AppState.js";
import { audience, clientId, domain } from "../env.js";
import { AuthService } from "../Services/AuthService.js";
import { logger } from "../Utils/Logger.js";

function drawUser() {
  const user = appState.user;
  const account = appState.account;
  const userAvatar = avatarTemplate(account);
  const button = authButton(user);
  const template = /* html */ `
    ${userAvatar}
    ${button}
  `;
  // @ts-ignore
  document.getElementById("authstate").innerHTML = template;
}

function _drawAuthSettings() {
  const elem = document.getElementById("auth-settings");
  if (!elem) {
    return;
  }
  elem.innerHTML = /* html */ `
  <div class="card p-2 elevation-4">
    <div class="card-title p-2">
      <div class="d-flex align-items-center">
        <div class="avatar">
          <img src="https://avatars.githubusercontent.com/u/2824157?s=280&v=4" alt="user" height="45" class="rounded-circle">
        </div>
        <div class="text mx-2">
          <b>Auth0 Settings</b>
        </div>
      </div>
    </div>
    <div class="card-body border-top">
      <div class="text block"><b>Domain:</b> ${domain}</div>
      <div class="text block"><b>Audience:</b> ${audience}</div>
      <div class="text block"><b>Client Id:</b> ${clientId}</div>
    </div>
  </div>
`;
}
export class AuthController {
  constructor() {
    appState.on("account", drawUser);
    AuthService.on(AuthService.AUTH_EVENTS.LOADED, drawUser);
    AuthService.on(AuthService.AUTH_EVENTS.LOADED, _drawAuthSettings);
    drawUser();
  }

  async login() {
    try {
      await AuthService.loginWithRedirect();
    } catch (e) {
      logger.error(e);
    }
  }

  logout() {
    try {
      AuthService.logout();
    } catch (e) {
      logger.error(e);
    }
  }
}

function authButton(user) {
  if (AuthService.loading) {
    return "";
  }
  return user.isAuthenticated
    ? /* html */ `
    <button class="btn btn-small btn-dark text-muted selectable me-3" onclick="app.authController.logout()"><i class="mdi mdi-logout f-16 text-white"></i></button>
  `
    : /* html */ `
    <button class="btn btn-dark selectable" onclick="app.authController.login()">login</button>
  `;
}

function avatarTemplate(account) {
  return account.picture
    ? /* html */ `
    <div class="mr-2">
      <img class="rounded-circle me-3" src="${account.picture}" alt="${account.name}" height="75" width="75"/>

      </div>`
    : AuthService.loading
    ? /* html */ `
      <div class="skeleton-loader dark avatar"></div>
      <div class="skeleton-loader dark text sm mx-2"></div>`
    : /* html */ `
      <div></div>
      `;
}
