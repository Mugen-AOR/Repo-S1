/* global game */

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
    constructor(rowNmbr, columnNmbr, obstacleNmbr, playerNmbr, weapons){
        this.rowNmbr      = rowNmbr;
        this.columnNmbr   = columnNmbr;
        this.obstacleNmbr = obstacleNmbr;
        this.playerNmbr   = playerNmbr;
        this.weapons      = weapons;
        this.activePlayer = Player.name;

        this.generateMap();
        this.generateObstacles();
        this.gerenatePlayers();
        game.gameMaster = this;
    }

    displayDirection(){

    }

    generateMap(){
        const board = document.querySelector("board");
        board.style = `width: calc(${this.columnNmbr*2}rem + ${this.columnNmbr*2}px);`;
        for(let row=0; row<this.rowNmbr; row++){
            for (let col = 0; col< this.columnNmbr; col++){
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
    generateSquareName(row, col){
        console.log(row, col)
        return `case${row}.${col}`;
    }

    /**
     * [extractCasePositionFromId description]
     *
     * @param   {string}  id  [id description]
     *
     * @return  {JSON}      {row: number, letter:number}
     */
    extractCasePositionFromId(id){
        id= id.slice("case".length);
        id = id.split(".");
        return {"col":parseInt(id[1]), "row":parseInt(id[0])};
    }


    generateObstacles(){
        let caseName;
        for( let i=0; i<this.obstacleNmbr; i++){
            caseName = this.randomCase;
            if( ! game[caseName].addObstacle()) i--;
        }
    }

    generateWeapons(){

    }

    gerenatePlayers(){
        let idCase;
        let error;
        let cases;
        for(let i=0; i<this.playerNmbr; i++){
            idCase = this.randomCase;
            cases = this.casesReachable(idCase,1);
            console.log(cases);
            cases.push(idCase);
            for (let ii=0, size = cases.length; ii<size; ii++){
                if(cases[ii].obstacle ) error = true;
            }
            if(game[idCase].playerId !== null || error) i--;
        }
    }

    nextTurn(){

    }

    gameOver(){

    }

    combatMode(){

    }
    
    /**
     * [casesReachable description]
     *
     * @param   {string}  startPoint  [startPoint description]
     * @param   {number}  depth       [depth description]
     *
     * @return  {Array}              [return description]
     */
    casesReachable(startPoint, depth){
       const {col, row} = this.extractCasePositionFromId(startPoint);
       console.log(col, row)
       let reachable = [];
       let variable;
       for( let i=1; i<=depth; i++){
           variable = col - 1 * depth;
        //    console.log("->",this.generateSquareName(row, variable));
           if(variable > 0 ) reachable.push(this.generateSquareName(row, variable));
           variable = col +1 * depth;
        //    console.log("->",this.generateSquareName(row, variable));
           if(variable <= this.columnNmbr ) reachable.push(this.generateSquareName(row, variable));
           variable = row + 1 * depth;
           console.log("****",variable, this.rowNmbr);
           if(variable <= this.rowNmbr ) reachable.push(this.generateSquareName(variable, col));
           variable = row - 1 * depth;
        //    console.log("->",this.generateSquareName(variable, col));
           if(variable > 0 ) reachable.push(this.generateSquareName(variable, col));
       }
       console.log(startPoint,reachable);
       return reachable;

    }

    /**
     * [randomCase description]
     *
     * @return  {string}  [return description]
     */
    get randomCase(){
        return  this.generateSquareName(Math.floor(Math.random()*this.rowNmbr), Math.floor(Math.random()*this.columnNmbr));
    }
}
class Player {
  /**
* classe Player
* @constructor
* @param   {number}  id      [Id du joueur]
* @param   {string}  column  [Lettre de la colonne]
* @param   {number}  row     [Numéro de la ligne]
* @param   {string}  weapon  [Nom de l'arme]
*
*/
  constructor(id, column, row, weapon) {
    this.id = id;
    this.column = column;
    this.row = row;
    this.weapon = weapon;
    this.hp = 100;
    this.defenseMode = false;
    this.combat = false;
    this.name = "joueur " + id;
  }

  move() {

  }

  switchWeapon() {

  }

  attack() {

  }

  defend() {

  }

  isAttacked() {

  }

  update() {

  }
}
class Square extends Component {
    /**
     * classe Square
     * @constructor
     */
    constructor(name, row, col, target) {
        super(name, "square", target)
        this.osbtacle = false;
        this.weapon = null;
        this.playerId = null;
        this.accessible = true;
        this.DOM.innerHTML = name;
    }

    /**
     * allow to know if this case is accessible when we check for deplacement list
     *
     * @return  {boolean}  [return description]
     */
    isAccessible() {
        if (this.playerId !== null || this.osbtacle) return false;
        return true;
    }

    click() {

    }

    render() {
        if (this.osbtacle) return this.templateObstacle();
    }

    /**
     * [addObstacle description]
     *
     * @return  {boolean}  [return description]
     */
    addObstacle() {
        if (this.osbtacle) return false;
        this.osbtacle = true;
        this.render();
        return true;
    }

    templateObstacle() {
        this.DOM.className = "obstacle";
    }
}