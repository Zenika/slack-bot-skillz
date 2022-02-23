const { getUserID } = require("../lib/bolt/getSlackInformations");
const {
  getSkillNameAndCategory,
} = require("../lib/requestsHasura/getSkillNameAndCategory");
const {
  postMessageSkillReminder,
} = require("../messages/messageSkillReminder");

async function fillSkillsByCategory(userEmail, arraySkill, app, reminder) {
  let arraySkillName = [];
  let arrayTools = [];
  let arrayLanguagesAndFrameworks = [];
  let arrayPlatforms = [];
  let arrayTechnicsAndMethods = [];

  const userID = await getUserID(userEmail, app, app.token);
  if (userID.length > 0) {
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
      arrayTechnicsAndMethods.toString(),
      reminder
    );
  }
}
module.exports.fillSkillsByCategory = fillSkillsByCategory;
