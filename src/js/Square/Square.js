/* global Component */

class Square extends Component {
  /**
   * classe Square
   * @constructor
   */
  constructor(name, row, col, target) {
    super(name, "square", target);
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