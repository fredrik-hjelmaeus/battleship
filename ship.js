class Ships {
  constructor(owner) {
    this.owner = owner;
    this.carrier = {
      type: "carrier",
      cells: ["-1", "-1", "-1", "-1", "-1"],
      hits: [],
      isVertical: false,
      isHorizontal: false,
      direction: "",
    };
    this.battleship = {
      type: "battleship",
      cells: ["-1", "-1", "-1", "-1"],
      hits: [],
      isVertical: false,
      isHorizontal: false,
      direction: "",
    };
    this.cruiser = {
      type: "cruiser",
      cells: ["-1", "-1", "-1"],
      hits: [],
      isVertical: false,
      isHorizontal: false,
      direction: "",
    };
    this.submarine = {
      type: "submarine",
      cells: ["-1", "-1", "-1"],
      hits: [],
      isVertical: false,
      isHorizontal: false,
      direction: "",
    };
    this.destroyer = {
      type: "destroyer",
      cells: ["-1", "-1"],
      hits: [],
      isVertical: false,
      isHorizontal: false,
      direction: "",
    };
    this.ships = [this.carrier, this.battleship, this.cruiser, this.submarine, this.destroyer];
  }
  initShips() {
    this.carrier = {
      type: "carrier",
      cells: ["-1", "-1", "-1", "-1", "-1"],
      hits: [],
      isVertical: false,
      isHorizontal: false,
      direction: "",
    };
    this.battleship = {
      type: "battleship",
      cells: ["-1", "-1", "-1", "-1"],
      hits: [],
      isVertical: false,
      isHorizontal: false,
      direction: "",
    };
    this.cruiser = {
      type: "cruiser",
      cells: ["-1", "-1", "-1"],
      hits: [],
      isVertical: false,
      isHorizontal: false,
      direction: "",
    };
    this.submarine = {
      type: "submarine",
      cells: ["-1", "-1", "-1"],
      hits: [],
      isVertical: false,
      isHorizontal: false,
      direction: "",
    };
    this.destroyer = {
      type: "destroyer",
      cells: ["-1", "-1"],
      hits: [],
      isVertical: false,
      isHorizontal: false,
      direction: "",
    };
    this.ships = [this.carrier, this.battleship, this.cruiser, this.submarine, this.destroyer];
  }
  getShipCells() {
    return this.ships.map((ship) => ship.cells);
  }
  setShipCell(shipNumber, cell, newValue) {
    console.log(this.ships[shipNumber].cells[cell], cell, newValue);
    this.ships[shipNumber].cells[cell] = newValue;
  }
  shot(cellIndex) {
    const shot = { isHit: false, sanked: false, shipNumber: null };

    for (let i = 0; i < this.ships.length; i++) {
      for (let j = 0; j < this.ships[i].cells.length; j++) {
        const index = this.ships[i].cells[j];
        if (index === cellIndex) {
          // hit on ship:  this.ships[i].type
          // setting that index as a hit # in shiphitsarray
          this.ships[i].hits.push("#");

          shot.isHit = true;
          // checking if ship is also sanked
          if (this.ships[i].hits.length === this.ships[i].cells.length) {
            shot.sanked = true;
            shot.shipNumber = i;
          }
        }
      }
    }

    return shot;
  }
}
