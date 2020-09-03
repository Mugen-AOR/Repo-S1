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