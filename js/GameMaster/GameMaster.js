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