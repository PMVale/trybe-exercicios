const { mage, warrior, dragon, battleMembers} = require('./data');

const mageBattle = (mage) => {
  const min = Math.ceil(mage.intelligence);
  const max = Math.floor(mage.intelligence * 2);
  mage.damage = Math.floor(Math.random() * (max - min + 1) + min);
  let manaCost = 15;
  if (mage.mana === 0) {
    mage.damage = 'Não possui mana suficiente';
    manaCost = 0;
  }
  const battleStats = {
    damage: mage.damage,
    manaCost: manaCost,
  }
  return battleStats;
};

console.log(mageBattle(mage));

module.exports = mageBattle;