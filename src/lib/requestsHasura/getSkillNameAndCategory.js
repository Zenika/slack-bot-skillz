const { request } = require("../utils/request");

async function getSkillNameAndCategory(id) {
  try {
    const response = await request(
      `${process.env.HASURA_BASE_URL}/api/rest/get-skill-infos-from-id?skill=${id}`,
      "GET"
    );
    return response.Skill_by_pk;
  } catch (e) {
    console.error("error : ", e);
  }
}

module.exports.getSkillNameAndCategory = getSkillNameAndCategory;
