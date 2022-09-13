const { getUserEmail } = require("./lib/bolt/getSlackInformations");
const { getBotUsers } = require("./lib/requestsHasura/getBotUsers");
module.exports = {
  homePage(app) {
    app.event("app_home_opened", async ({ event, client, body }) => {
      try {
        const user = body["user_id"];
        const collaborators = process.env.COLLABORATORS.split(";");
        let itsACollaborator = false;
        const botUsers = await getBotUsers();

        for (let i = 0; i < collaborators.length; i++) {
          if ((await getUserEmail(user, app, app.token)) === user)
            itsACollaborator = true;
        }

        if (itsACollaborator) {
          await client.views.publish({
            user_id: event.user,
            view: {
              type: "home",
              callback_id: "home_view",

              /* body of the view */
              blocks: [
                {
                  type: "section",
                  text: {
                    type: "mrkdwn",
                    text: "*Welcome to your _Skillz-bot Home_* :tada:",
                  },
                },
                {
                  type: "divider",
                },
                {
                  type: "section",
                  text: {
                    type: "mrkdwn",
                    text: "*The bot will help you to keep your Skillz profile up to date and know easily the preferred topics of the others Skillz users :technologist:*\n",
                  },
                },
                {
                  type: "section",
                  text: {
                    type: "mrkdwn",
                    text: "\n\n<https://skillz.zenika.com/profile|Skillz personal profile>\n:chart_with_upwards_trend: \n\n SkillZ is an application for managing the skills and competences of Zenika's different collaborators. It aims at gathering your feedbacks in order to match the different profiles with missions or trainings that correspond the best.",
                  },
                },
                {
                  type: "divider",
                },
                {
                  type: "section",
                  text: {
                    type: "mrkdwn",
                    text: `*You see this section cause you are specified as collaborator of Skillz bot project*\n\nActually, *${botUsers.length}* people have activated the bot notifications`,
                  },
                },
              ],
            },
          });
        } else {
          await client.views.publish({
            user_id: event.user,
            view: {
              type: "home",
              callback_id: "home_view",

              /* body of the view */
              blocks: [
                {
                  type: "section",
                  text: {
                    type: "mrkdwn",
                    text: "*Welcome to your _Skillz-bot Home_* :tada:",
                  },
                },
                {
                  type: "divider",
                },
                {
                  type: "section",
                  text: {
                    type: "mrkdwn",
                    text: "*The bot will help you to keep your Skillz profile up to date and know easily the preferred topics of the others Skillz users :technologist:*\n",
                  },
                },
                {
                  type: "section",
                  text: {
                    type: "mrkdwn",
                    text: "\n\n<https://skillz.zenika.com/profile|Skillz personal profile>\n:chart_with_upwards_trend: \n\n SkillZ is an application for managing the skills and competences of Zenika's different collaborators. It aims at gathering your feedbacks in order to match the different profiles with missions or trainings that correspond the best.",
                  },
                },
              ],
            },
          });
        }
      } catch (error) {
        console.error("error", error);
      }
    });
  },
};
