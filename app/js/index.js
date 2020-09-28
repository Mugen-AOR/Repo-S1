const weapons = [
  {
    name: "arme par defaut",
    dammage: 10
  },
  {
    name: "arme1",
    dammage: 70
  },
  {
    name: "arme2",
    dammage: 32
  },
  {
    name: "arme3",
    dammage: 12
  }
];

var game = {};
new GameMaster(10, 10, 5, 2, weapons);