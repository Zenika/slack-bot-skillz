const { getAllSkillsNames } = require("../../lib/requestsHasura/getAllSkillsNames")
const { getSpecificArgument } = require("../../lib/utils/getSpecificArgument")

async function responseNote(command) {
    const allSkills = await getAllSkillsNames();
    let skillName = "";

    for (let i = 0; i < allSkills.Skill.length; i++) {
        if (getSpecificArgument(command, allSkills.Skill[i].name) != "") {
            skillName = allSkills.Skill[i].name;
            break;
        }
    }
    return "fail"
}

module.exports.responseNote = responseNote; 