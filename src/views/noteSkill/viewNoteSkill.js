const {
  getUserEmail,
  getChannelID,
} = require("../../lib/bolt/getSlackInformations");
const { request } = require("../../lib/utils/request");
const { postMessage } = require("../../lib/bolt/postMessages");
const {
  getSkillNameAndCategory,
} = require("../../lib/requestsHasura/getSkillNameAndCategory");
const {
  getAllSkillsNames,
} = require("../../lib/requestsHasura/getAllSkillsNames");
const { getSpecificArgument } = require("../../lib/utils/getSpecificArgument");
const {
  getSkillCategoryAndIDByName,
} = require("../../lib/requestsHasura/getSkillCategoryAndIDByName");

let skillName = "";

module.exports = {
  async changeCommandValueForView(command) {
    const allSkills = await getAllSkillsNames();

    for (let i = 0; i < allSkills.Skill.length; i++) {
      if (getSpecificArgument(command, allSkills.Skill[i].name) != "") {
        skillName = allSkills.Skill[i].name;
        return skillName;
      }
    }
    return "fail";
  },
  viewNoteSkill(app) {
    const skillIDTesting = "0ffd1717-d46b-4a76-8dec-548505c18fcb";

    app.view("noteSkill", async ({ ack, body, view }) => {
      await ack();
      const skillValue =
        view["state"]["values"]["skill"]["informationModal"]["selected_option"][
          "value"
        ];
      const desireValue =
        view["state"]["values"]["desire"]["informationModal"][
          "selected_option"
        ]["value"];
      const user = body["user"]["id"];
      try {
        const userEmail = await getUserEmail(user, app, app.token);
        const skillCategoryAndID = await getSkillCategoryAndIDByName(skillName);
        await request(
          `${process.env.HASURA_BASE_URL}/api/rest/update-skill?email=${userEmail}&skillId=${skillCategoryAndID.id}&skillLevel=${skillValue}&desireLevel=${desireValue}`,
          "PUT"
        );
        const channelID = await getChannelID(user, app, app.token);
        //const skillName = await getSkillNameAndCategory(skillIDTesting);
        await postMessage(
          channelID,
          `:tada: You updated your desire and skill level of *${skillName}* :tada:\n\n:bar_chart: Watch the graph of this skill here https://skillz.zenika.com/skills/mine/${skillCategoryAndID.Category.label}`,
          app,
          app.token
        );
      } catch (e) {
        console.error("error", e);
      }
    });
  },
};
