const { request } = require("../utils/request");

async function getSkillIDByName(name) {
  try {
    const response = await request(
      `${process.env.HASURA_BASE_URL}/api/rest/get-skill-ID-by-name?name=${name}`,
      "GET"
    );
    return response.Skill[0];
  } catch (e) {
    console.error(e);
  }
}

module.exports.getSkillIDByName = getSkillIDByName;
