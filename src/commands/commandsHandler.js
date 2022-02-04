const { commandByTopic } = require("./bytopic/commandByTopic");
const { commandNoteSkill } = require("./noteSkill/commandNoteSkill");
const { commandActivate } = require("./activate/commandActivateReminder");
const {
  commandDesactivate,
} = require("./desactivate/commandDesactivateReminder");
const { commandOldSkills } = require("./oldSkills/commandOldSkills");

module.exports = {
  commandsHandler(app) {
    commandNoteSkill(app);
    commandByTopic(app);
    commandActivate(app);
    commandDesactivate(app);
    commandOldSkills(app);
  },
};
