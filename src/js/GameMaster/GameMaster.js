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
    this.rowNmbr = rowNmbr;
    this.columnNmbr = columnNmbr;
    this.obstacleNmbr = obstacleNmbr;
    this.playerNmbr = playerNmbr;
    this.weapons = weapons;
    this.activePlayer = Player.name;
  }

  displayDirection() {

  }

  generateMap() {

  }

  generateObstacles() {

  }

  generateWeapons() {

  }

  gerenatePlayers() {

  }

  nextTurn() {

  }

  gameOver() {

  }

  combatMode() {

  }
}