const { request } = require("../utils/request");

async function getSkillsInfosDesireAndSkillByID(email, id, last) {
    const response = await request(`https://staging.hasura.skillz.zenika.com/api/rest/get-skills-infos-by-ID-and-email?email=${email}&id=${id}`, "GET");
    if (last === true) {
        console.log(response)
    }
    return response
}

module.exports.getSkillsInfosDesireAndSkillByID = getSkillsInfosDesireAndSkillByID;
