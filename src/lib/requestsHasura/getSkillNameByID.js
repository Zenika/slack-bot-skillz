//https://staging.hasura.skillz.zenika.com/api/rest/get-skill-name-by-id

const { request } = require("../utils/request");

async function getSkillNameByID(id) {
    const response = await request(`https://staging.hasura.skillz.zenika.com/api/rest/get-skill-name-by-id?id=${id}`, "GET");
    return response
}

module.exports.getSkillNameByID = getSkillNameByID;
