const {
  getBotNotifications,
} = require("../lib/requestsHasura/getBotNotifications");
const { getAllEmails } = require("../lib/requestsHasura/getAllEmails");
const {
  getSkillsDatesUpdates,
} = require("../lib/requestsHasura/getSkillsDatesUpdates");
const { fillSkillsByCategory } = require("./fillSkillsByCategory");
const {
  getLastUpdateOnSkill,
} = require("../lib/requestsHasura/getLastUpdateOnSkill");

Date.prototype.subDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() - days);
  return date;
};

async function arrayOfDelayedSkillsByUsers(app, email) {
  let lastUpdates = [{}];
  let updatesDelayed = [];

  var todayDate = new Date();

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

function dateToCompare(todayDate) {
  if (process.env.BETA_TESTS) {
    return todayDate.subDays(1);
  } else {
    return todayDate.subDays(30);
  }
}

async function getDatasToFillInCategories(email, app) {
  var todayDate = new Date();
  let lastUpdates = [{}];
  let notificationsUser = [];
  let updatesDelayed = [];

  notificationsUser = await getBotNotifications(email);
  if (
    notificationsUser &&
    notificationsUser.User &&
    notificationsUser.User[0].botNotifications === false
  )
    return -1;
  lastUpdates = await getSkillsDatesUpdates(email);
  for (let j = 0; j < lastUpdates.UserSkillDesire.length; j++) {
    if (
      new Date(
        lastUpdates.UserSkillDesire[j].Skill.UserSkillDesires[
          lastUpdates.UserSkillDesire[j].Skill.UserSkillDesires.length - 1
        ].created_at
      ) < dateToCompare(todayDate)
    ) {
      updatesDelayed = updatesDelayed.concat(
        lastUpdates.UserSkillDesire[j].Skill.UserSkillDesires[
          lastUpdates.UserSkillDesire[j].Skill.UserSkillDesires.length - 1
        ].skillId
      );
    }
  }
  await fillSkillsByCategory(email, updatesDelayed, app, true);
}

async function arrayOfDelayedSkillsByAllUsers(app) {
  var todayDate = new Date();
  const usersAllEmails = await getAllEmails();
  let beta_user = false;
  let lastUpdateOnASkill = "";

  for (let i = 0; i < usersAllEmails.User.length; i++) {
    lastUpdateOnASkill = await getLastUpdateOnSkill(
      usersAllEmails.User[i].email
    );
    if (
      lastUpdateOnASkill.length === 0 ||
      (lastUpdateOnASkill.length > 0 &&
        new Date(lastUpdateOnASkill[0].created_at) > dateToCompare(todayDate))
    ) {
      continue;
    }
    if (!process.env.BETA_TESTS) {
      getDatasToFillInCategories(usersAllEmails.User[i].email, app);
    }
    if (process.env.BETA_TESTS) {
      //send reminder to beta testers only
      const beta_emails = process.env.BETA_TESTS.split(";");
      for (let j = 0; j < beta_emails.length; j++) {
        if (usersAllEmails.User[i].email === beta_emails[j]) {
          beta_user = true;
          break;
        }
      }
    }
    if (beta_user) {
      beta_user = false;
      getDatasToFillInCategories(usersAllEmails.User[i].email, app);
    }
  }
}

module.exports.arrayOfDelayedSkillsByAllUsers = arrayOfDelayedSkillsByAllUsers;
module.exports.arrayOfDelayedSkillsByUsers = arrayOfDelayedSkillsByUsers;
