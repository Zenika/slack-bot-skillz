const {
  getSkillsDatesUpdates,
} = require("./lib/requestsHasura/getSkillsDatesUpdates");
const { getUserID } = require("./lib/bolt/getSlackInformations");
const { getAllEmails } = require("./lib/requestsHasura/getAllEmails");
const {
  getSkillNameAndCategory,
} = require("./lib/requestsHasura/getSkillNameAndCategory");
const { postMessageSkillReminder } = require("./messages/messageSkillReminder");
var cron = require("node-cron");
const {
  getBotNotifications,
} = require("./lib/requestsHasura/getBotNotifications");

function convertDate(date) {
  let newDate = "";
  let year = "";

  for (let i = 0; i < date.length; i++) {
    if (date[i] != "-") year = year.concat(date[i]);
    else {
      for (let j = (i += 1); j < date.length; j++) {
        newDate = newDate.concat(date[j]);
      }
      newDate = newDate.concat("-");
      newDate = newDate.concat(year);
      return newDate;
    }
  }
  return null;
}

Date.prototype.subDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() - days);
  return date;
};

async function sendMessageToRemind(userEmail, arraySkill, app) {
  let arraySkillName = [];
  let arrayTools = [];
  let arrayLanguagesAndFrameworks = [];
  let arrayPlatforms = [];
  let arrayTechnicsAndMethods = [];

  //if for testing : send only one message
  if (userEmail === "mai-ly.lehoux@zenika.com") {
    const userID = await getUserID(userEmail, app, app.token);
    for (let i = 0; i < arraySkill.length; i++) {
      arraySkillName = arraySkillName.concat(
        await getSkillNameAndCategory(arraySkill[i])
      );
      if (arraySkillName[i].Category.label === "languages-and-frameworks") {
        arrayLanguagesAndFrameworks = arrayLanguagesAndFrameworks.concat(
          arraySkillName[i].name
        );
      }
      if (arraySkillName[i].Category.label === "tools") {
        arrayTools = arrayTools.concat(arraySkillName[i].name);
      }
      if (arraySkillName[i].Category.label === "platforms") {
        arrayPlatforms = arrayPlatforms.concat(arraySkillName[i].name);
      }
      if (arraySkillName[i].Category.label === "technics-and-methods") {
        arrayTechnicsAndMethods = arrayTechnicsAndMethods.concat(
          arraySkillName[i].name
        );
      }
    }
    await postMessageSkillReminder(
      userID,
      app,
      app.token,
      arrayLanguagesAndFrameworks.toString(),
      arrayTools.toString(),
      arrayPlatforms.toString(),
      arrayTechnicsAndMethods.toString()
    );
  }
}

async function arrayOfDelayedSkillsByUser(app) {
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
    if (updatesDelayed.length != 0) {
      await sendMessageToRemind(
        usersAllEmails.User[i].email,
        updatesDelayed,
        app
      );
    }
    updatesDelayed = [];
  }
  return updatesDelayed;
}

async function monthlyCron(app) {
  if (process.env.ENV === "DEV") {
    cron.schedule("* * * * *", () => {
      arrayOfDelayedSkillsByUser(app);
    });
  } else {
    cron.schedule("* * * 1 *", () => {
      arrayOfDelayedSkillsByUser(app);
    });
  }
}

module.exports.monthlyCron = monthlyCron;
