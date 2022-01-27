const { request } = require("../utils/request");

async function getAllEmails() {
  const response = await request(
    `${process.env.HASURA_BASE_URL}/api/rest/get-all-emails`,
    "GET"
  );
  return response;
}

module.exports.getAllEmails = getAllEmails;
