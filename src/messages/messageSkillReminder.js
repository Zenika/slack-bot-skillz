const {
  postThreeLinesMessageReminder,
  postTwoLinesMessageReminder,
  postOneLineMessageReminder,
  postFourLinesMessageReminder,
} = require("./postMessages");

async function postMessageSkillReminder(
  channelID,
  app,
  slackBotToken,
  arrayLanguagesAndFrameworks,
  arrayTools,
  arrayPlatforms,
  arrayTechnicsAndMethods,
  reminder
) {
  if (
    arrayLanguagesAndFrameworks.length > 0 &&
    arrayTools.length > 0 &&
    arrayPlatforms.length > 0 &&
    arrayTechnicsAndMethods.length > 0
  ) {
    try {
      await postFourLinesMessageReminder(
        channelID,
        "*:alarm_clock: You didn't update these skills since more than 1 month :*",
        "*Languages and Frameworks*",
        arrayLanguagesAndFrameworks,
        "*Tools*",
        arrayTools,
        "*Technics and Methods*",
        arrayTechnicsAndMethods,
        "*Platforms*",
        arrayPlatforms,
        app,
        app.botToken,
        "Skillz Reminder",
        reminder
      );
    } catch (e) {
      console.error("error", e);
    }
  } else if (
    arrayLanguagesAndFrameworks.length > 0 &&
    arrayTools.length > 0 &&
    arrayTechnicsAndMethods.length > 0
  ) {
    try {
      await postThreeLinesMessageReminder(
        channelID,
        "*:alarm_clock: You didn't update these skills since more than 1 month :*",
        "*Languages and Frameworks*",
        arrayLanguagesAndFrameworks,
        "*Tools*",
        arrayTools,
        "*Technics and Methods*",
        arrayTechnicsAndMethods,
        app,
        app.botToken,
        "Skillz Reminder",
        reminder
      );
    } catch (e) {
      console.error("error", e);
    }
  } else if (
    arrayLanguagesAndFrameworks.length > 0 &&
    arrayPlatforms.length > 0 &&
    arrayTechnicsAndMethods.length > 0
  ) {
    try {
      await postThreeLinesMessageReminder(
        channelID,
        "*:alarm_clock: You didn't update these skills since more than 1 month :*",
        "*Languages and Frameworks*",
        arrayLanguagesAndFrameworks,
        "*Platforms*",
        arrayPlatforms,
        "*Technics and Methods*",
        arrayTechnicsAndMethods,
        app,
        app.botToken,
        "Skillz Reminder",
        reminder
      );
    } catch (e) {
      console.error("error", e);
    }
  } else if (
    arrayTools.length > 0 &&
    arrayPlatforms.length > 0 &&
    arrayTechnicsAndMethods.length > 0
  ) {
    try {
      await postThreeLinesMessageReminder(
        channelID,
        "*:alarm_clock: You didn't update these skills since more than 1 month :*",
        "*Tools*",
        arrayTools,
        "*Platforms*",
        arrayPlatforms,
        "*Technics and Methods*",
        arrayTechnicsAndMethods,
        app,
        app.botToken,
        "Skillz Reminder",
        reminder
      );
    } catch (e) {
      console.error("error", e);
    }
  } else if (
    arrayLanguagesAndFrameworks.length > 0 &&
    arrayTools.length > 0 &&
    arrayPlatforms.length > 0
  ) {
    try {
      await postThreeLinesMessageReminder(
        channelID,
        "*:alarm_clock: You didn't update these skills since more than 1 month :*",
        "*Languages and Frameworks*",
        arrayLanguagesAndFrameworks,
        "*Tools*",
        arrayTools,
        "*Platforms*",
        arrayPlatforms,
        app,
        app.botToken,
        "Skillz Reminder",
        reminder
      );
    } catch (e) {
      console.error("error", e);
    }
  } else if (arrayLanguagesAndFrameworks.length > 0 && arrayTools.length > 0) {
    try {
      await postTwoLinesMessageReminder(
        channelID,
        "*:alarm_clock: You didn't update these skills since more than 1 month :*",
        "*Languages and Frameworks*",
        arrayLanguagesAndFrameworks,
        "*Tools*",
        arrayTools,
        app,
        app.botToken,
        "Skillz Reminder",
        reminder
      );
    } catch (e) {
      console.error("error", e);
    }
  } else if (
    arrayLanguagesAndFrameworks.length > 0 &&
    arrayPlatforms.length > 0
  ) {
    try {
      await postTwoLinesMessageReminder(
        channelID,
        "*:alarm_clock: You didn't update these skills since more than 1 month :*",
        "*Languages and Frameworks*",
        arrayLanguagesAndFrameworks,
        "*Platforms*",
        arrayPlatforms,
        app,
        app.botToken,
        "Skillz Reminder",
        reminder
      );
    } catch (e) {
      console.error("error", e);
    }
  } else if (
    arrayLanguagesAndFrameworks.length > 0 &&
    arrayTechnicsAndMethods.length > 0
  ) {
    try {
      await postTwoLinesMessageReminder(
        channelID,
        "*:alarm_clock: You didn't update these skills since more than 1 month :*",
        "*Languages and Frameworks*",
        arrayLanguagesAndFrameworks,
        "*Technics and Methods*",
        arrayTechnicsAndMethods,
        app,
        app.botToken,
        "Skillz Reminder",
        reminder
      );
    } catch (e) {
      console.error("error", e);
    }
  } else if (arrayTools.length > 0 && arrayPlatforms.length > 0) {
    try {
      await postTwoLinesMessageReminder(
        channelID,
        "*:alarm_clock: You didn't update these skills since more than 1 month :*",
        "*Tools*",
        arrayTools,
        "*Platforms*",
        arrayPlatforms,
        app,
        app.botToken,
        "Skillz Reminder",
        reminder
      );
    } catch (e) {
      console.error("error", e);
    }
  } else if (arrayTools.length > 0 && arrayTechnicsAndMethods.length > 0) {
    try {
      await postTwoLinesMessageReminder(
        channelID,
        "*:alarm_clock: You didn't update these skills since more than 1 month :*",
        "*Tools*",
        arrayTools,
        "*Technics and Methods*",
        arrayTechnicsAndMethods,
        app,
        app.botToken,
        "Skillz Reminder",
        reminder
      );
    } catch (e) {
      console.error("error", e);
    }
  } else if (arrayPlatforms.length > 0 && arrayTechnicsAndMethods.length > 0) {
    try {
      await postTwoLinesMessageReminder(
        channelID,
        "*:alarm_clock: You didn't update these skills since more than 1 month :*",
        "*Platforms*",
        arrayPlatforms,
        "*Technics and Methods*",
        arrayTechnicsAndMethods,
        app,
        app.botToken,
        "Skillz Reminder",
        reminder
      );
    } catch (e) {
      console.error("error", e);
    }
  } else if (arrayPlatforms.length > 0) {
    try {
      await postOneLineMessageReminder(
        channelID,
        "*:alarm_clock: You didn't update these skills since more than 1 month :*",
        "*Platforms*",
        arrayPlatforms,
        app,
        app.botToken,
        "Skillz Reminder",
        reminder
      );
    } catch (e) {
      console.error("error", e);
    }
  } else if (arrayLanguagesAndFrameworks.length > 0) {
    try {
      await postOneLineMessageReminder(
        channelID,
        "*:alarm_clock: You didn't update these skills since more than 1 month :*",
        "*Languages and Frameworks*",
        arrayLanguagesAndFrameworks,
        app,
        app.botToken,
        "Skillz Reminder",
        reminder
      );
    } catch (e) {
      console.error("error", e);
    }
  } else if (arrayTools.length > 0) {
    try {
      await postOneLineMessageReminder(
        channelID,
        "*:alarm_clock: You didn't update these skills since more than 1 month :*",
        "*Tools*",
        arrayTools,
        app,
        app.botToken,
        "Skillz Reminder",
        reminder
      );
    } catch (e) {
      console.error("error", e);
    }
  } else if (arrayTechnicsAndMethods.length > 0) {
    try {
      await postOneLineMessageReminder(
        channelID,
        "*:alarm_clock: You didn't update these skills since more than 1 month :*",
        "*Technics and Methods*",
        arrayTechnicsAndMethods,
        app,
        app.botToken,
        "Skillz Reminder",
        reminder
      );
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
              text: "*:alarm_clock: You are up to date with your skills !*",
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
              text: reminder
                ? ":mechanic: This is an automatic message. To desactivate me use the command *_/skillz-desactivate_* :mechanic:"
                : ":bulb: You can have this information monthly. Be sure that you used the _/skillz-activate_ command",
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
