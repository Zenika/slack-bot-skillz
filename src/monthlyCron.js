const { getAllUsersID } = require("./lib/bolt/getAllUsersID");
const {
  getSkillsDateUpdates,
} = require("./lib/requestsHasura/getSkillsLastUpdates");
const { getChannelID, getUserID } = require("./lib/bolt/getSlackInformations");
const { getAllEmails } = require("./lib/requestsHasura/getAllEmails");
const {
  getSkillNameAndCategory,
} = require("./lib/requestsHasura/getSkillInfos");

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

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

async function sendMessageToRemind(userEmail, arraySkill) {
  let arraySkillName = [];

  if (userEmail != "mai-ly.lehoux@zenika.com") return;
  for (let i = 0; i < arraySkill.length; i++) {
    arraySkillName = arraySkillName.concat(
      await getSkillNameAndCategory(arraySkill[i])
    );
  }
  console.log(arraySkillName);
}

async function arrayOfDelayedSkillsByUser() {
  var todayDate = new Date();
  let lastUpdates = [{}];
  let updatesDelayed = [];
  const usersAllEmails = await getAllEmails();

  for (let i = 0; i < usersAllEmails.User.length; i++) {
    lastUpdates = await getSkillsDateUpdates(usersAllEmails.User[i].email);
    for (let j = 0; j < lastUpdates.UserSkillDesire.length; j++) {
      if (
        new Date(
          lastUpdates.UserSkillDesire[j].Skill.UserSkillDesires[0].created_at
        ) < todayDate.subDays(30)
      ) {
        updatesDelayed = updatesDelayed.concat(
          lastUpdates.UserSkillDesire[j].Skill.UserSkillDesires[0].skillId
        );
      }
      if (updatesDelayed.length != 0) {
        sendMessageToRemind(usersAllEmails.User[i].email, updatesDelayed);
      }
      updatesDelayed = [];
    }
  }
  return updatesDelayed;
}

async function monthlyCron(app) {
  //const usersIDArray = await getAllUsersID(app, app.token);

  arrayOfDelayedSkillsByUser();
  //console.log(lastUpdates[0].UserSkillDesire)
}

module.exports.monthlyCron = monthlyCron;
