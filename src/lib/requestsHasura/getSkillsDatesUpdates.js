const { request } = require("../utils/request");

async function getSkillsDatesUpdates(email) {
  //if (process.env.ENV === "STAGING")
  const response = await request(
    `${process.env.HASURA_BASE_URL}/api/rest/get-last-updated-skills?email=${email}`,
    "GET"
  );
  /*     else if (process.env.ENV === "PRODUCTION")
        const response = await request(`${process.env.HASURA_BASE_URL}/api/rest/get-last-updated-skills?email=${email}`, "GET")
    else
        console.log("please precize an env")
    console.log(response) */
  return response;
}

module.exports.getSkillsDatesUpdates = getSkillsDatesUpdates;
