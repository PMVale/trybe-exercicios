const { mage, warrior, dragon, battleMembers} = require('./data');


// const warriorDamage = (warrior) => {
//   warrior.damage = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg));
//   if (warrior.damage < warrior.strength) {
//     warrior.damage = warrior.strength;
//   }
//   return `O dano do guerreiro é ${warrior.damage}`;
// };

const warriorDamage = (warrior) => {
  const min = Math.ceil(warrior.strength);
  const max = Math.floor(warrior.strength * warrior.weaponDmg);
  warrior.damage = Math.floor(Math.random() * (max - min + 1) + min);
  // return `O dano do guerreiro é ${warrior.damage}`;
  return warrior.damage;
}

console.log(warriorDamage(warrior));


module.exports = warriorDamage;
