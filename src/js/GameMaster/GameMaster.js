// @ts-nocheck
/* global game Square Player */

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
    this.turn = 0;

    this.generateMap();
    this.generateObstacles();
    this.gerenatePlayers();
    this.generateWeapons();
    this.nextTurn();
  }

  displayDirection() {
  }

  generateMap() {
    const board = document.querySelector("board");
    board.style = `width: calc(${this.columnNmbr*2}rem + ${this.columnNmbr*2}px);`; //TODO: remplacer ce 2 en dur apr une variable
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
   * add obsctalces on board
   *
   * @return  {void}
   */
  generateObstacles() {
    for (let i = 0; i < this.obstacleNmbr; i++) {
      if (! game[this.randomCase].addObstacle()) i--;
    }
  }

  /**
   * [generateWeapons description]
   *
   * @return  {[type]}  [return description]
   */
  generateWeapons() {
    this.weapons.shift();
    console.log("weapons", this.weapons);
    for (let i = 0, size = this.weapons.length, caseId; i < size; i++) {
      caseId = this.randomCase;
      console.log("case", caseId, game[caseId].isAccessible());
      if (game[caseId].isAccessible()) game[caseId].update("weapon", true);
      else i--;
    }
  }

  /**
   * add player on the board
   *
   * @return  {void}
   */
  gerenatePlayers() {
    let 
      cases,
      error,
      idCase,
      obstacles,
      playerId
      ;


    for (let i = 0; i < this.playerNmbr; i++) {
      idCase    = this.randomCase;
      cases     = this.casesReachable(idCase, 1, true);
      error     = false;
      obstacles = 0;

      //check around selected case
      for (let ii = 0, size = cases.length; ii < size; ii++) {
        if (game[cases[ii]].obstacle) obstacles++;
        if (game[cases[ii]].playerId !== null) error = true;
      }
      //check selected case
      if (game[idCase].obstacle || game[idCase].playerId !== null) error = true;
      
      if (obstacles === 4 || error) {
        i--;
        continue;
      }
      playerId = i+1;
      this["player"+playerId] = new Player(playerId,idCase,this.weapons[0]);
      game[idCase].update("playerId",playerId);
    }
  }

  /**
   * change player turn
   *
   * @return  {void}  [return description]
   */
  nextTurn() {
    this.turn++;
    if (this.turn > this.playerNmbr) this.turn = 1;
    console.log(this.turn);
    const player = "player"+this.turn;
    this[player].play();
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
   * @param   {boolean} [arr]       pointer if we need or not an array as anwser
   *
   * @return  {Array|object}
   */
  casesReachable(startPoint, depth, arr=false) {
    const
      bottom = [],
      col    = game[startPoint].col,
      left   = [],
      right  = [],
      row    = game[startPoint].row,
      top    = [];
    let variable;
    for (let i = 1; i <= depth; i++) {
      variable = col - i;
      if (variable >= 0) left.push(this.generateSquareName(row, variable));
      variable = col + i;
      if (variable < this.columnNmbr) right.push(this.generateSquareName(row, variable));
      variable = row + i;
      if (variable < this.rowNmbr) bottom.push(this.generateSquareName(variable, col));
      variable = row - i;
      if (variable > 0) top.push(this.generateSquareName(variable, col));
    }
    if (arr) return bottom.concat(left)
      .concat(right)
      .concat(top);
    return  {
      "bottom": bottom, 
      "left"  : left, 
      "right" : right,
      "top"   : top 
    };
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