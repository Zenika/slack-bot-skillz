const { request } = require("../utils/request");

async function getSkillsDatesUpdates(email) {
  const response = await request(
    `${process.env.HASURA_BASE_URL}/api/rest/get-last-updated-skills?email=${email}`,
    "GET"
  );
  return response;
}

module.exports.getSkillsDatesUpdates = getSkillsDatesUpdates;
