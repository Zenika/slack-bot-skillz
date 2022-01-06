const { getLastDateToEPOCH } = require("./lib/getLastDateToEPOCH");
const { scheduledMessage } = require("./lib/scheduledMessage");
const { getRequest } = require("./lib/getRequest");

async function reminderNoteSkillz() {
    try {
        const responseUserInfos = await getRequest("https://staging.hasura.skillz.zenika.com/api/rest/get-user-infos-agency-topics");
        for (let i = 0; i < responseUserInfos.User.length; i++) {
            //if for test
            if (responseUserInfos.User[i].email === "mai-ly.lehoux@zenika.com") {
            const responseDates = await getRequest(
                `https://staging.hasura.skillz.zenika.com/api/rest/get-user-skill-desire-created-at?email=${responseUserInfos.User[i].email}`
            );
            
            //console.log(responseDates.User[0].UserSkillDesires)
            //console.log(getLastDateToEPOCH(responseDates.User[0].UserSkillDesires))
            }
        }
        
    
    }
    catch(e) {
        console.error(e);
    }
}

module.exports.reminderNoteSkillz = reminderNoteSkillz;