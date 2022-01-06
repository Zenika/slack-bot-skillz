const { verifyAgencyIsGiven } = require("./lib/verifyAgencyIsGiven");
const { verifyTopicIsGiven } = require("./lib/verifyTopicIsGiven");
const {getRequest} = require("./lib/getRequest")
async function responseCommandByTopic(text) {
  let names = "";
  let agency = await verifyAgencyIsGiven(text);
  if (agency === "")
    return "fail";
  let topic = await verifyTopicIsGiven(text);
  if (topic === "")
    return "fail";
  
  const response = await getRequest(
     `https://staging.hasura.skillz.zenika.com/api/rest/get-users-by-agency-and-topics?agency=${agency}&topic=${topic}`
  );
  for (let i = 0; i < response.User.length; i++) {
    names = names + `:bulb: *${response.User[i].name}* liked ${topic} ! watch his or her profile there thanks to the link below \n :mag: https://skillz.zenika.com/profile/${response.User[i].email}\n\n\n`
  }
  return names;
}

module.exports.responseCommandByTopic = responseCommandByTopic;
