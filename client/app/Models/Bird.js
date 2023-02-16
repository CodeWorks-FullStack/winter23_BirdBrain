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
    //                                                    MAKE SURE THIS HAS QUOTES vvvvvvvvv
    return /*html*/ `
    <div class="col-12 col-md-3 p-4  my-2" onclick="app.birdsController.setActive('${this.id}')">
    <div class="birdCard">
          <img class="birdImage" src="${this.img}" alt="">
          <h2>${this.name}</h2>
          <div>
            <img class="profilePic" src="https://thiscatdoesnotexist.com" alt="">
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
