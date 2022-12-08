const header = document.getElementById('header-container');

header.style.backgroundColor = 'green';

const sectionEmergency = document.getElementsByClassName('emergency-tasks');

sectionEmergency[0].style.backgroundColor = 'salmon';

const sectionNotEmergency = document.getElementsByClassName('no-emergency-tasks');

sectionNotEmergency[0].style.backgroundColor = 'gold';

const footer = document.getElementById('footer-container');

footer.style.backgroundColor = 'black';

const emergencyItems = document.querySelectorAll('.emergency-tasks h3');

for(let index = 0; index < emergencyItems.length; index += 1) {
  emergencyItems[index].style.backgroundColor = 'purple';
};

const notEmergencyItems = document.querySelectorAll('.no-emergency-tasks h3');

for(let index = 0; index < notEmergencyItems.length; index += 1) {
  notEmergencyItems[index].style.backgroundColor = 'black';
};