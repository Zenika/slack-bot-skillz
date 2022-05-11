function switchCommands(command) {
  switch (command) {
    case "/bytopic":
      switch (process.env.ENV) {
        case "PRODUCTION":
          return "/skillz-byTopic";
        default:
          return `/skillz-byTopic_${process.env.ENV}`;
      }
    case "/activate":
      switch (process.env.ENV) {
        case "PRODUCTION":
          return "/skillz-activateReminder";
        default:
          return `/skillz-activateReminder_${process.env.ENV}`;
      }
    case "/desactivate":
      switch (process.env.ENV) {
        case "PRODUCTION":
          return "/skillz-desactivateReminder";
        default:
          return `/skillz-desactivateReminder_${process.env.ENV}`;
      }
    case "/noteSkill":
      switch (process.env.ENV) {
        case "PRODUCTION":
          return "/skillz-noteSkill";
        default:
          return `/skillz-noteSkill_${process.env.ENV}`;
      }
    case "/oldSkills":
      switch (process.env.ENV) {
        case "PRODUCTION":
          return "/skillz-reminderMessage";
        default:
          return `/skillz-reminderMessage_${process.env.ENV}`;
      }
    case "/version":
      switch (process.env.ENV) {
        case "PRODUCTION":
          return "/skillz-version";
        default:
          return `/skillz-version_${process.env.ENV}`;
      }
    default:
      console.log("not recognized command");
      return "not recognized command";
  }
}

module.exports.switchCommands = switchCommands;
