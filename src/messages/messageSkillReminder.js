const {
  postThreeLinesMessageReminder,
  postTwoLinesMessageReminder,
  postOneLineMessageReminder,
  postFourLinesMessageReminder,
} = require("./postMessages");

async function postMessageSkillReminder(
  channelID,
  app,
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
        reminder
          ? "*:alarm_clock: You haven't noted any skills since more than 1 month ! So I purpose you to note some old skills below : *"
          : "*You have these skills below that hasn't been noted since more than 1 month* :blush:",
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
        reminder
          ? "*:alarm_clock: You haven't noted any skills since more than 1 month ! So I purpose you to note some old skills below : *"
          : "*You have these skills below that hasn't been noted since more than 1 month* :blush:",
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
        reminder
          ? "*:alarm_clock: You haven't noted any skills since more than 1 month ! So I purpose you to note some old skills below : *"
          : "*You have these skills below that hasn't been noted since more than 1 month* :blush:",
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
        reminder
          ? "*:alarm_clock: You haven't noted any skills since more than 1 month ! So I purpose you to note some old skills below : *"
          : "*You have these skills below that hasn't been noted since more than 1 month* :blush:",
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
        reminder
          ? "*:alarm_clock: You haven't noted any skills since more than 1 month ! So I purpose you to note some old skills below : *"
          : "*You have these skills below that hasn't been noted since more than 1 month* :blush:",
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
        reminder
          ? "*:alarm_clock: You haven't noted any skills since more than 1 month ! So I purpose you to note some old skills below : *"
          : "*You have these skills below that hasn't been noted since more than 1 month* :blush:",
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
        reminder
          ? "*:alarm_clock: You haven't noted any skills since more than 1 month ! So I purpose you to note some old skills below : *"
          : "*You have these skills below that hasn't been noted since more than 1 month* :blush:",
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
        reminder
          ? "*:alarm_clock: You haven't noted any skills since more than 1 month ! So I purpose you to note some old skills below : *"
          : "*You have these skills below that hasn't been noted since more than 1 month* :blush:",
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
        reminder
          ? "*:alarm_clock: You haven't noted any skills since more than 1 month ! So I purpose you to note some old skills below : *"
          : "*You have these skills below that hasn't been noted since more than 1 month* :blush:",
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
        reminder
          ? "*:alarm_clock: You haven't noted any skills since more than 1 month ! So I purpose you to note some old skills below : *"
          : "*You have these skills below that hasn't been noted since more than 1 month* :blush:",
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
        reminder
          ? "*:alarm_clock: You haven't noted any skills since more than 1 month ! So I purpose you to note some old skills below : *"
          : "*You have these skills below that hasn't been noted since more than 1 month* :blush:",
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
        reminder
          ? "*:alarm_clock: You haven't noted any skills since more than 1 month ! So I purpose you to note some old skills below : *"
          : "*You have these skills below that hasn't been noted since more than 1 month* :blush:",
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
        reminder
          ? "*:alarm_clock: You haven't noted any skills since more than 1 month ! So I purpose you to note some old skills below : *"
          : "*You have these skills below that hasn't been noted since more than 1 month* :blush:",
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
        reminder
          ? "*:alarm_clock: You haven't noted any skills since more than 1 month ! So I purpose you to note some old skills below : *"
          : "*You have these skills below that hasn't been noted since more than 1 month* :blush:",
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
        reminder
          ? "*:alarm_clock: You haven't noted any skills since more than 1 month ! So I purpose you to note some old skills below : *"
          : "*You have these skills below that hasn't been noted since more than 1 month* :blush:",
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
    if (reminder) return;
    try {
      await app.client.chat.postMessage({
        token: app.botToken,
        channel: channelID,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*:alarm_clock: You are up to date with all your skills !*",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":bulb: You've learned something else since the last time ? Let us know. _To update your profile, note some skills via <https://skillz.zenika.com/|Skillz app>",
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
