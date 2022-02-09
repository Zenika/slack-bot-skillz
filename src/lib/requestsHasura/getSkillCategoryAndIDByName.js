const { request } = require("../utils/request");

async function getSkillCategoryAndIDByName(name) {
  try {
    const response = await request(
      `${process.env.HASURA_BASE_URL}/api/rest/get-skill-category-ID-by-name?name=${name}`,
      "GET"
    );
    return response.Skill[0];
  } catch (e) {
    console.error(e);
  }
}

module.exports.getSkillCategoryAndIDByName = getSkillCategoryAndIDByName;
