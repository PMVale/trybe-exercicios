const { mage, warrior, dragon, battleMembers} = require('./data');

// const dragonDamage = (dragon) => {
//   dragon.damage = Math.floor(Math.random() * dragon.strength)
//   if (dragon.damage < 15) {
//     dragon.damage = 15;
//   }
//   return `O dano do dragão é ${dragon.damage}`; 
// };

const dragonDamage = (dragon) => {
  const min = Math.ceil(15);
  const max = Math.floor(dragon.strength);
  dragon.damage = Math.floor(Math.random() * (max - min + 1) + min);
  // return `O dano do dragão é ${dragon.damage}`;
  return dragon.damage;
}

console.log(dragonDamage(dragon));

module.exports = dragonDamage;
