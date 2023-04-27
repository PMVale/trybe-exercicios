const { mage, warrior, dragon, battleMembers} = require('./data');

const warriorDamage = require('./warriorDamage');

const dragonDamage = require('./dragonDamage');

const mageBattle = require('./mageBattle');

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const warriorDmg = warriorDamage(warrior);
    dragon.healthPoints -= warriorDmg;
    warrior.damage = warriorDmg
  },
  mageTurn: (mageBattle) => {
    const mageStats = mageBattle(mage);
    const mageDamage = mageStats.damage;
    mage.mana -= mageStats.manaCost;
    dragon.healthPoints -= mageDamage;
    mage.damage = mageDamage;
  },
  dragonTurn: (dragonDamage) => {
    const dragonDmg = dragonDamage(dragon);
    warrior.healthPoints -= dragonDmg;
    mage.healthPoints -= dragonDmg;
    dragon.damage = dragonDmg;
  },
  turnActions: () => battleMembers
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageBattle);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnActions());