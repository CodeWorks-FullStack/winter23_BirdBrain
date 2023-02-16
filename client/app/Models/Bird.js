export class Bird {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.canFly = data.canFly;
    this.size = data.size;
    this.img = data.img;
    this.creatorId = data.creatorId;
  }

  get birdCardTemplate() {
    return /*html*/ `
    <div class="col-12 col-md-3 p-4  my-2" onclick="app.birdsController.setActive('${this.id}')">
    <div class="birdCard">
          <img class="birdCardImage" src="${this.img}" alt="">
          <h2>${this.name}</h2>
          <div>
            <img class="profilePic" src="https://thiscatdoesnotexist.com" alt="">
          </div>
          </div>
        </div>
    `;
  }
}
