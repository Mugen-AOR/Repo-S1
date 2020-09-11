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
  constructor(id, currentCase, weapon) {
    this.combat      = false;
    this.currentCase = currentCase,
    this.defenseMode = false;
    this.hp          = 100;
    this.id          = id;
    this.name        = "joueur " + id;
    this.weapon      = weapon;
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