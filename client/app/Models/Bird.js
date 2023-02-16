export class Bird {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.canFly = data.canFly;
    this.size = data.size;
    this.img = data.img;
    this.creatorId = data.creatorId;
    // NOTE WATCHER INFORMATION
    this.watcherId = data.watcherId;
    this.watchCount = data.watchCount;
    this.watcher = data.Creator;
  }

  // ACTIVE BIRD CARD
  get ActiveTemplate() {
    return /*html*/ `
            <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${this.name}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body container-fluid">
          <div class="row">
            <div class="col-8">
              <img class="birdModalImage" src="${this.img}" alt="">
            </div>
            <div class="col-4">
            <h1>${this.name}</h1>
             <h5>Can it fly?: ${this.canFly == true ? "👍" : "👎"}</h5>
             <h6>Size: ${this.size}</h6>
             <div class="d-flex gap-2 flex-wrap" id="watchers">
             </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn bird-btn-green" data-bs-dismiss="modal">Done Watching</button>
        </div>`;
  }

  // BIRD CARD
  get birdCardTemplate() {
    //                                                    MAKE SURE THIS HAS QUOTES vvvvvvvvv
    return /*html*/ `
    <div class="col-12 col-md-4 p-5 mb-5">
        <div class="birdCard">
          <img class="birdImage selectable" src="${this.img}" data-bs-toggle="modal" data-bs-target="#birdModal" onclick="app.birdsController.setActive('${this.id}')" alt="">
         <h1 class="p-3">${this.name}</h1>
        <div class="d-flex justify-content-between align-items-end p-2 px-3 pb-4">
        <button class="fs-3 creep-count btn pe-2" onclick="app.birdWatchersController.watchBird('${this.id}')">👀 ${this.watchCount}</button>
        <img class="watcherImage" src="${this.watcher?.picture}" title="${this.watcher?.name}" alt="">
      </div>
        </div>
      </div>
    `;
  }

  // GET THE BIRD FORM FROM YOUR HTML \\

  static createBirdForm() {
    return /*html*/ `
    <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Report Bird</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <form class="modal-body row" onsubmit="app.birdsController.reportBird()">

              <div class="col-12 form-floating my-2">
                <input type="text" class="form-control" id="name" name="name" placeholder="Bird's Name">
                <label for="name">Bird's Name:</label>
              </div>

              <div class="form-floating my-2 col-12">
                <input required type="url" class="form-control" id="img" name="img" placeholder="Bird's Image">
                <label for="img">Bird's Image</label>
              </div>

              <div class="form-floating my-2 col-12">
                <select name="size" class="form-select" id="size">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="chunko">Big Chonk</option>
                </select>
              </div>

              <div class="col-12 my-2">
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="canFly" name="canFly">
                  <label for="canFly" class="form-check-label">Can this bird Fly?</label>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
              </div>

            </form>



    `;
  }
}
