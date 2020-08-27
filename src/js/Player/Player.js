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