export class Watcher {
  constructor(data) {
    this.name = data.creator.name;
    this.picture = data.creator.picture;
  }

  get watcherFace() {
    return `
    <div class="">
    <img class="rounded-circle" height="50px" width="50px" src="${this.picture}" alt="${this.name}" title="${this.name}">
    </div>
    `;
  }
}
