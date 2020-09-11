// @ts-nocheck
/* global game Square */

class GameMaster {
  /**
   * classe GameMaster
   * @constructor
   * @param   {number}  rowNmbr       [Nombre de lignes de la grille de jeu]
   * @param   {number}  columnNmbr    [Nombre de colonnes de la grille de jeu]
   * @param   {number}  obstacleNmbr  [Nombre d'obstacles sur la grille de jeu]
   * @param   {number}  playerNmbr    [Nombre de joueurs sur la grille de jeu]
   * @param   {number}  weapons       [Nombre d'armes sur la grille de jeu]
   *
   */
  constructor(rowNmbr, columnNmbr, obstacleNmbr, playerNmbr, weapons) {
    game.gameMaster   = this;
    // this.activePlayer = Player.name;
    this.columnNmbr   = columnNmbr;
    this.obstacleNmbr = obstacleNmbr;
    this.playerNmbr   = playerNmbr;
    this.rowNmbr      = rowNmbr;
    this.weapons      = weapons;

    this.generateMap();
    this.generateObstacles();
    this.gerenatePlayers();
  }

  displayDirection() {
  }

  generateMap() {
    const board = document.querySelector("board");
    board.style = `width: calc(${this.columnNmbr*2}rem + ${this.columnNmbr*2}px);`;
    for (let row = 0; row < this.rowNmbr; row++) {
      for (let col = 0; col < this.columnNmbr; col++) {
        new Square(this.generateSquareName(row, col), row, col, board);
      }
    }
  }

  /**
   * [generateSquareName description]
   *
   * @param   {number}  row  [row description]
   * @param   {number}  col  [col description]
   *
   * @return  {string}       [return description]
   */
  generateSquareName(row, col) {
    return `case${row}.${col}`;
  }

  /**
   * [extractCasePositionFromId description]
   *
   * @param   {string}  id  [id description]
   *
   * @return  {object}      {row: number, letter:number}
   */
  extractCasePositionFromId(id) {
    const result = id.slice("case".length)
      .split(".");
    return {
      "col": parseInt(result[1]),
      "row": parseInt(result[0])
    };
  }

  /**
   * place obsctalces on board
   *
   * @return  {void}
   */
  generateObstacles() {
    let caseName;
    for (let i = 0; i < this.obstacleNmbr; i++) {
      caseName = this.randomCase;
      if (! game[caseName].addObstacle()) i--;
    }
  }

  generateWeapons() {

  }

  gerenatePlayers() {
    let idCase;
    let error;
    let cases;
    for (let i = 0; i < this.playerNmbr; i++) {
      idCase = this.randomCase;
      cases = this.casesReachable(idCase, 1);
      cases.push(idCase);
      for (let ii = 0, size = cases.length; ii < size; ii++) {
        if (cases[ii].obstacle) error = true;
      }
      if (game[idCase].playerId !== null || error) i--;
    }
  }

  nextTurn() {

  }

  gameOver() {

  }

  combatMode() {

  }

  /**
   * [casesReachable description]
   *
   * @param   {string}  startPoint  [startPoint description]
   * @param   {number}  depth       [depth description]
   *
   * @return  {Array}              [return description]
   */
  casesReachable(startPoint, depth) {
    const { col, row } = this.extractCasePositionFromId(startPoint);
    console.log(col, row);
    let reachable = [];
    let variable;
    for (let i = 1; i <= depth; i++) {
      variable = col - 1 * depth;
      //    console.log("->",this.generateSquareName(row, variable));
      if (variable > 0) reachable.push(this.generateSquareName(row, variable));
      variable = col + 1 * depth;
      //    console.log("->",this.generateSquareName(row, variable));
      if (variable <= this.columnNmbr) reachable.push(this.generateSquareName(row, variable));
      variable = row + 1 * depth;
      console.log("****", variable, this.rowNmbr);
      if (variable <= this.rowNmbr) reachable.push(this.generateSquareName(variable, col));
      variable = row - 1 * depth;
      //    console.log("->",this.generateSquareName(variable, col));
      if (variable > 0) reachable.push(this.generateSquareName(variable, col));
    }
    console.log(startPoint, reachable);
    return reachable;

  }

  /**
   * [randomCase description]
   *
   * @return  {string}  [return description]
   */
  get randomCase() {
    return this.generateSquareName(Math.floor(Math.random() * this.rowNmbr), Math.floor(Math.random() * this.columnNmbr));
  }
}