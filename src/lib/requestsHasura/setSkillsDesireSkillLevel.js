const { request } = require("../utils/request");

async function setSkillsDesireSkillLevel(userEmail, skillID, skillValue, desireValue) {
  const response = await request(
          `${process.env.HASURA_BASE_URL}/api/rest/update-skill?email=${userEmail}&skillId=${skillID}&skillLevel=${skillValue}&desireLevel=${desireValue}`,
          "PUT"
        );;
  return response;
}

module.exports.setSkillsDesireSkillLevel = setSkillsDesireSkillLevel;
