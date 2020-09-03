class Component{
  constructor(name, tagName, domTarget){
    this.name = name;
    this.DOM = document.createElement(tagName);
    domTarget.appendChild(this.DOM);
    window.game[name] = this;
  }
}
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
        this.rowNmbr = rowNmbr;
        this.columnNmbr = columnNmbr;
        this.obstacleNmbr = obstacleNmbr;
        this.playerNmbr = playerNmbr;
        this.weapons = weapons;
        this.activePlayer = Player.name;
        this.generateMap();
        this.generateObstacles();
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
        const ref = ["a","b", "c", "d", "e", "f", "g"];
        return ref[row]+""+col;
    }

    generateObstacles(){
        let caseName;
        for( let i=0; i<this.obstacleNmbr; i++){
            caseName = this.generateSquareName(Math.floor(Math.random()*this.rowNmbr), Math.floor(Math.random()*this.columnNmbr));
            if( ! game[caseName].addObstacle()) i--;
        }
    }

    generateWeapons(){

    }

    GerenatePlayers(){

    }

    nextTurn(){

    }

    gameOver(){

    }

    combatMode(){

    }
}
class Square extends Component{
    /**
     * classe Square
     * @constructor
     */
    constructor(name, row, col, target){
        super(name,"square", target)
        this.osbtacle   = false;
        this.weapon     = null;
        this.playerId   = null;
        this.accessible = true;
        this.DOM.innerHTML = name;
    }

    isAccessible(){

    }

    click(){

    }

    render(){
        if (this.osbtacle) return this.templateObstacle();
    }

    /**
     * [addObstacle description]
     *
     * @return  {boolean}  [return description]
     */
    addObstacle(){
        if (this.osbtacle) return false;
        this.osbtacle = true;
        this.render();
        return true;
    }

    templateObstacle(){
        this.DOM.className = "obstacle";
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
    constructor(id, column, row, weapon){
        this.id = id;
        this.column = column;
        this.row = row;
        this.weapon = weapon;
        this.hp = 100;
        this.defenseMode = fasle;
        this.combat = false;
        this.name = "joueur " + id;
    }

    move(){

    }

    switchWeapon(){

    }

    attack(){

    }

    defend(){

    }

    isAttacked(){

    }

    update(){

    }
}