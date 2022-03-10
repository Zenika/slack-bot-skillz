const { request } = require("../utils/request");
//insert-or-update-new-skill-level
async function insertOrUpdateSkillLevel(
  userEmail,
  skillValue,
  desireValue,
  skillID
) {
  const response = await request(
    `${process.env.HASURA_BASE_URL}/api/rest/insert-or-update-new-skill-level?email=${userEmail}&skillLevel=${skillValue}&desireLevel=${desireValue}&skillId=${skillID}`,
    "PUT"
  );
  return response;
}

module.exports.insertOrUpdateSkillLevel = insertOrUpdateSkillLevel;


/*async function insertOrUpdateSkillLevel(
  userEmail,
  skillID,
  skillValue,
  desireValue
) {
  const response = await request(
    `${process.env.HASURA_BASE_URL}/api/rest/update-skill?email=${userEmail}&skillId=${skillID}&skillLevel=${skillValue}&desireLevel=${desireValue}`,
    "PUT"
  );
  return response;
}

module.exports.insertOrUpdateSkillLevel = insertOrUpdateSkillLevel;
 */