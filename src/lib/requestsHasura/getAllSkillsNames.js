const { request } = require("../utils/request");

async function getAllSkillsNames() {
  const response = await request(
    `${process.env.HASURA_BASE_URL}/api/rest/get-all-skills-name`,
    "GET"
  );
  return response;
}

module.exports.getAllSkillsNames = getAllSkillsNames;
