async function postMessageSkillReminder(
  channelID,
  app,
  slackBotToken,
  arrayLanguagesAndFrameworks,
  arrayTools,
  arrayPlatforms,
  arrayTechnicsAndMethods
) {
  if (
    arrayLanguagesAndFrameworks.length > 0 &&
    arrayTools.length > 0 &&
    arrayPlatforms.length > 0 &&
    arrayTechnicsAndMethods.length > 0
  ) {
    try {
      await app.client.chat.postMessage({
        token: slackBotToken,
        channel: channelID,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*:alarm_clock: You didn't update these skills since more than 1 month :*",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Languages and Frameworks*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayLanguagesAndFrameworks,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Tools*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayTools,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Platforms*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayPlatforms,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Technics and methods*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayTechnicsAndMethods,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "_:bulb: To update theses skills easily you can use the command */[skill_name]* or you can note them via *Skillz app*_",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:",
            },
          },
        ],
        text: "Skillz reminder",
      });
    } catch (e) {
      console.error("error", e);
    }
  } else if (
    arrayLanguagesAndFrameworks.length > 0 &&
    arrayTools.length > 0 &&
    arrayTechnicsAndMethods.length > 0
  ) {
    try {
      await app.client.chat.postMessage({
        token: slackBotToken,
        channel: channelID,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*:alarm_clock: You didn't update these skills since more than 1 month :*",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Languages and Frameworks*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayLanguagesAndFrameworks,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Tools*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayTools,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Technics and Methods*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayTechnicsAndMethods,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "_:bulb: To update theses skills easily you can use the command */[skill_name]* or you can note them via *Skillz app*_",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:",
            },
          },
        ],
        text: "Skillz reminder",
      });
    } catch (e) {
      console.error("error", e);
    }
  } else if (
    arrayLanguagesAndFrameworks.length > 0 &&
    arrayPlatforms.length > 0 &&
    arrayTechnicsAndMethods.length > 0
  ) {
    try {
      await app.client.chat.postMessage({
        token: slackBotToken,
        channel: channelID,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*:alarm_clock: You didn't update these skills since more than 1 month :*",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Languages and Frameworks*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayLanguagesAndFrameworks,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Platforms*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayPlatforms,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Technics and Methods*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayTechnicsAndMethods,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "_:bulb: To update theses skills easily you can use the command */[skill_name]* or you can note them via *Skillz app*_",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:",
            },
          },
        ],
        text: "Skillz reminder",
      });
    } catch (e) {
      console.error("error", e);
    }
  } else if (
    arrayTools.length > 0 &&
    arrayPlatforms.length > 0 &&
    arrayTechnicsAndMethods.length > 0
  ) {
    try {
      await app.client.chat.postMessage({
        token: slackBotToken,
        channel: channelID,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*:alarm_clock: You didn't update these skills since more than 1 month :*",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Tools*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayTools,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Platforms*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayPlatforms,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Technics and Methods*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayTechnicsAndMethods,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "_:bulb: To update theses skills easily you can use the command */[skill_name]* or you can note them via *Skillz app*_",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:",
            },
          },
        ],
        text: "Skillz reminder",
      });
    } catch (e) {
      console.error("error", e);
    }
  } else if (
    arrayLanguagesAndFrameworks.length > 0 &&
    arrayTools.length > 0 &&
    arrayPlatforms.length > 0
  ) {
    try {
      await app.client.chat.postMessage({
        token: slackBotToken,
        channel: channelID,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*:alarm_clock: You didn't update these skills since more than 1 month :*",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Languages and Frameworks*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayLanguagesAndFrameworks,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Tools*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayTools,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Platforms*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayPlatforms,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "_:bulb: To update theses skills easily you can use the command */[skill_name]* or you can note them via *Skillz app*_",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:",
            },
          },
        ],
        text: "Skillz reminder",
      });
    } catch (e) {
      console.error("error", e);
    }
  } else if (arrayLanguagesAndFrameworks.length > 0 && arrayTools.length > 0) {
    try {
      await app.client.chat.postMessage({
        token: slackBotToken,
        channel: channelID,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*:alarm_clock: You didn't update these skills since more than 1 month :*",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Languages and Frameworks*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayLanguagesAndFrameworks,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Tools*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayTools,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "_:bulb: To update theses skills easily you can use the command */[skill_name]* or you can note them via *Skillz app*_",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:",
            },
          },
        ],
        text: "Skillz reminder",
      });
    } catch (e) {
      console.error("error", e);
    }
  } else if (
    arrayLanguagesAndFrameworks.length > 0 &&
    arrayPlatforms.length > 0
  ) {
    try {
      await app.client.chat.postMessage({
        token: slackBotToken,
        channel: channelID,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*:alarm_clock: You didn't update these skills since more than 1 month :*",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Languages and Frameworks*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayLanguagesAndFrameworks,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Platforms*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayPlatforms,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "_:bulb: To update theses skills easily you can use the command */[skill_name]* or you can note them via *Skillz app*_",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:",
            },
          },
        ],
        text: "Skillz reminder",
      });
    } catch (e) {
      console.error("error", e);
    }
  } else if (
    arrayLanguagesAndFrameworks.length > 0 &&
    arrayTechnicsAndMethods.length > 0
  ) {
    try {
      await app.client.chat.postMessage({
        token: slackBotToken,
        channel: channelID,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*:alarm_clock: You didn't update these skills since more than 1 month :*",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Languages and Frameworks*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayLanguagesAndFrameworks,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Technics and Methods*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayTechnicsAndMethods,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "_:bulb: To update theses skills easily you can use the command */[skill_name]* or you can note them via *Skillz app*_",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:",
            },
          },
        ],
        text: "Skillz reminder",
      });
    } catch (e) {
      console.error("error", e);
    }
  } else if (arrayTools.length > 0 && arrayPlatforms.length > 0) {
    try {
      await app.client.chat.postMessage({
        token: slackBotToken,
        channel: channelID,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*:alarm_clock: You didn't update these skills since more than 1 month :*",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Tools*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayTools,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Platforms*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayPlatforms,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "_:bulb: To update theses skills easily you can use the command */[skill_name]* or you can note them via *Skillz app*_",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:",
            },
          },
        ],
        text: "Skillz reminder",
      });
    } catch (e) {
      console.error("error", e);
    }
  } else if (arrayTools.length > 0 && arrayTechnicsAndMethods.length > 0) {
    try {
      await app.client.chat.postMessage({
        token: slackBotToken,
        channel: channelID,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*:alarm_clock: You didn't update these skills since more than 1 month :*",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Tools*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayTools,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Technics and Method*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayTechnicsAndMethods,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "_:bulb: To update theses skills easily you can use the command */[skill_name]* or you can note them via *Skillz app*_",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:",
            },
          },
        ],
        text: "Skillz reminder",
      });
    } catch (e) {
      console.error("error", e);
    }
  } else if (arrayPlatforms.length > 0 && arrayTechnicsAndMethods.length > 0) {
    try {
      await app.client.chat.postMessage({
        token: slackBotToken,
        channel: channelID,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*:alarm_clock: You didn't update these skills since more than 1 month :*",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Platforms*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayPlatforms,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Technics and Method*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayTechnicsAndMethods,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "_:bulb: To update theses skills easily you can use the command */[skill_name]* or you can note them via *Skillz app*_",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:",
            },
          },
        ],
        text: "Skillz reminder",
      });
    } catch (e) {
      console.error("error", e);
    }
  } else if (arrayPlatforms.length > 0) {
    try {
      await app.client.chat.postMessage({
        token: slackBotToken,
        channel: channelID,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*:alarm_clock: You didn't update these skills since more than 1 month :*",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Platforms*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayPlatforms,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "_:bulb: To update theses skills easily you can use the command */[skill_name]* or you can note them via *Skillz app*_",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:",
            },
          },
        ],
        text: "Skillz reminder",
      });
    } catch (e) {
      console.error("error", e);
    }
  } else if (arrayLanguagesAndFrameworks.length > 0) {
    try {
      await app.client.chat.postMessage({
        token: slackBotToken,
        channel: channelID,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*:alarm_clock: You didn't update these skills since more than 1 month :*",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Languages and Frameworks*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayLanguagesAndFrameworks,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "_:bulb: To update theses skills easily you can use the command */[skill_name]* or you can note them via *Skillz app*_",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:",
            },
          },
        ],
        text: "Skillz reminder",
      });
    } catch (e) {
      console.error("error", e);
    }
  } else if (arrayTools.length > 0) {
    try {
      await app.client.chat.postMessage({
        token: slackBotToken,
        channel: channelID,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*:alarm_clock: You didn't update these skills since more than 1 month :*",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Tools*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayTools,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "_:bulb: To update theses skills easily you can use the command */[skill_name]* or you can note them via *Skillz app*_",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:",
            },
          },
        ],
        text: "Skillz reminder",
      });
    } catch (e) {
      console.error("error", e);
    }
  } else if (arrayTechnicsAndMethods.length > 0) {
    try {
      await app.client.chat.postMessage({
        token: slackBotToken,
        channel: channelID,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*:alarm_clock: You didn't update these skills since more than 1 month :*",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Technics and Methods*",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: arrayTechnicsAndMethods,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "_:bulb: To update theses skills easily you can use the command */[skill_name]* or you can note them via *Skillz app*_",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:",
            },
          },
        ],
        text: "Skillz reminder",
      });
    } catch (e) {
      console.error("error", e);
    }
  }
  //*************** */
  else {
    try {
      await app.client.chat.postMessage({
        token: slackBotToken,
        channel: channelID,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*:alarm_clock: You didn't update some skills since more than 1 month, but I can't find which ones :sweat_smile:*",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "_:bulb: To update your profile, note some skills via *Skillz app*_",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":mechanic: This is an automatic message. To desactivate me use the command */desactivate* :mechanic:",
            },
          },
        ],
        text: "Skillz reminder",
      });
    } catch (e) {
      console.error("error", e);
    }
  }
}
module.exports.postMessageSkillReminder = postMessageSkillReminder;
