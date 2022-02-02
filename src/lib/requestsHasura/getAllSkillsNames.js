const { request } = require("../utils/request");

async function getAllSkillsNames() {
  const response = await request(
    "https://staging.hasura.skillz.zenika.com/api/rest/get-all-skills-name",
    "GET"
  );
  return response;
}

module.exports.getAllSkillsNames = getAllSkillsNames;
