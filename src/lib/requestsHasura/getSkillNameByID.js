const { request } = require("../utils/request");

async function getSkillNameByID(id) {
  const response = await request(
    `${process.env.HASURA_BASE_URL}/api/rest/get-skill-name-by-id?id=${id}`,
    "GET"
  );
  return response;
}

module.exports.getSkillNameByID = getSkillNameByID;
