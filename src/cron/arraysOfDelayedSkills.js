const {
  getBotNotifications,
} = require("../lib/requestsHasura/getBotNotifications");
const { getAllEmails } = require("../lib/requestsHasura/getAllEmails");
const {
  getSkillsDatesUpdates,
} = require("../lib/requestsHasura/getSkillsDatesUpdates");
const { fillSkillsByCategory } = require("./fillSkillsByCategory");

Date.prototype.subDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() - days);
  return date;
};

async function arrayOfDelayedSkillsByUsers(app, email) {
  var todayDate = new Date();
  let lastUpdates = [{}];
  let updatesDelayed = [];

  lastUpdates = await getSkillsDatesUpdates(email);
  for (let j = 0; j < lastUpdates.UserSkillDesire.length; j++) {
    if (
      new Date(
        lastUpdates.UserSkillDesire[j].Skill.UserSkillDesires[
          lastUpdates.UserSkillDesire[j].Skill.UserSkillDesires.length - 1
        ].created_at
      ) < todayDate.subDays(30)
    ) {
      updatesDelayed = updatesDelayed.concat(
        lastUpdates.UserSkillDesire[j].Skill.UserSkillDesires[
          lastUpdates.UserSkillDesire[j].Skill.UserSkillDesires.length - 1
        ].skillId
      );
    }
  }
  await fillSkillsByCategory(email, updatesDelayed, app, false);
  return updatesDelayed;
}

async function arrayOfDelayedSkillsByAllUsers(app) {
  var todayDate = new Date();
  let lastUpdates = [{}];
  let updatesDelayed = [];
  const usersAllEmails = await getAllEmails();
  let notificationsUser = [];

  for (let i = 0; i < usersAllEmails.User.length; i++) {
    notificationsUser = await getBotNotifications(usersAllEmails.User[i].email);
    if (
      notificationsUser.User &&
      notificationsUser.User[0].botNotifications === false
    )
      continue;
    lastUpdates = await getSkillsDatesUpdates(usersAllEmails.User[i].email);
    for (let j = 0; j < lastUpdates.UserSkillDesire.length; j++) {
      if (
        new Date(
          lastUpdates.UserSkillDesire[j].Skill.UserSkillDesires[
            lastUpdates.UserSkillDesire[j].Skill.UserSkillDesires.length - 1
          ].created_at
        ) < todayDate.subDays(30)
      ) {
        updatesDelayed = updatesDelayed.concat(
          lastUpdates.UserSkillDesire[j].Skill.UserSkillDesires[
            lastUpdates.UserSkillDesire[j].Skill.UserSkillDesires.length - 1
          ].skillId
        );
      }
    }
    await fillSkillsByCategory(
      usersAllEmails.User[i].email,
      updatesDelayed,
      app,
      true
    );
    updatesDelayed = [];
  }
  return updatesDelayed;
}

module.exports.arrayOfDelayedSkillsByAllUsers = arrayOfDelayedSkillsByAllUsers;
module.exports.arrayOfDelayedSkillsByUsers = arrayOfDelayedSkillsByUsers;
