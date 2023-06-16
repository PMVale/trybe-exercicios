const fs = require('fs').promises;

const path = require('path');

const activitiesPath = path.resolve(__dirname, '../activities.json');

const addActivity = async (data) => {
  const activities = await fs.readFile(activitiesPath, 'utf-8');
  const newActivity = {id: !activities ? 0 : JSON.parse(activities).length, ...data}
  if (!activities) {
    await fs.writeFile(activitiesPath, JSON.stringify([newActivity]));
    return;
  }
  const newActivities = [
    ...JSON.parse(activities),
    newActivity
  ];
  await fs.writeFile(activitiesPath, JSON.stringify(newActivities));
};

const signupPath = path.resolve(__dirname, '../signup.json');

const addSignup = async (data, token) => {
  const signups = await fs.readFile(signupPath, 'utf-8');
  const newSignup = {token, ...data}
  if (!signups) {
    await fs.writeFile(signupPath, JSON.stringify([newSignup]));
    return;
  }
  const newSignups = [
    ...JSON.parse(signups),
    newSignup
  ];
  await fs.writeFile(signupPath, JSON.stringify(newSignups));
};

module.exports = {
  addActivity,
  addSignup,
}