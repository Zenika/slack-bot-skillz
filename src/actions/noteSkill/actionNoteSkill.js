const { getAllSkillsNames } = require("../../lib/requestsHasura/getAllSkillsNames")
const { getSpecificArgument } = require("../../lib/utils/getSpecificArgument")

let skillName = "";

module.exports = {
  async changeCommandValueForAction(command) {
    const allSkills = await getAllSkillsNames();
  
    for (let i = 0; i < allSkills.Skill.length; i++) {
        if (getSpecificArgument(command, allSkills.Skill[i].name) != "") {
            skillName = allSkills.Skill[i].name;
            return skillName
        }
    }
    return "fail"
  },
  actionNoteSkill(app) {
    app.action("noteSkill", async ({ ack, body, context }) => {
      await ack();
      try {
        const result = await app.client.views.open({
          trigger_id: body.trigger_id,
          token: context.botToken,
          view: {
            type: "modal",
            // View identifier
            callback_id: "noteSkill",
            title: {
              type: "plain_text",
              text: "Update your Skillz datas",
            },
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: `*${skillName}*`,
                },
              },
              {
                type: "divider",
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: "Knowledge",
                },
                block_id: "skill",
                accessory: {
                  type: "radio_buttons",
                  action_id: "informationModal",
                  initial_option: {
                    value: "1",
                    text: {
                      type: "plain_text",
                      text: "1: I looked at what is was",
                    },
                  },
                  options: [
                    {
                      value: "1",
                      text: {
                        type: "plain_text",
                        text: "1: I looked at what is was",
                      },
                    },
                    {
                      value: "2",
                      text: {
                        type: "plain_text",
                        text: "2: I played with it, I tested it",
                      },
                    },
                    {
                      value: "3",
                      text: {
                        type: "plain_text",
                        text: "3: I have worked with it on significant projects",
                      },
                    },
                    {
                      value: "4",
                      text: {
                        type: "plain_text",
                        text: "4: I've worked with it, I'm pretty comfortable, I've done some research",
                      },
                    },
                    {
                      value: "5",
                      text: {
                        type: "plain_text",
                        text: "5: I've worked a lot with it in different contexts, I know it perfectly",
                      },
                    },
                  ],
                },
              },
              {
                type: "divider",
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: "Desire",
                },
                block_id: "desire",
                accessory: {
                  type: "radio_buttons",
                  action_id: "informationModal",
                  initial_option: {
                    value: "1",
                    text: {
                      type: "plain_text",
                      text: "1: I don't want to use it anymore and/or I don't want to learn",
                    },
                  },
                  options: [
                    {
                      value: "1",
                      text: {
                        type: "plain_text",
                        text: "1: I don't want to use it anymore and/or I don't want to learn",
                      },
                    },
                    {
                      value: "2",
                      text: {
                        type: "plain_text",
                        text: "2: I prefer to avoid, or only to troubleshoot",
                      },
                    },
                    {
                      value: "3",
                      text: {
                        type: "plain_text",
                        text: "3: I don't love it but it doesn't bother me",
                      },
                    },
                    {
                      value: "4",
                      text: {
                        type: "plain_text",
                        text: "4: I really like it",
                      },
                    },
                    {
                      value: "5",
                      text: {
                        type: "plain_text",
                        text: "5: I want to use it everyday",
                      },
                    },
                  ],
                },
              },
            ],
            submit: {
              type: "plain_text",
              text: "Submit",
            },
          },
        });
      } catch (error) {
        console.error(error);
      }
    });
    app.action("informationModal", async ({ ack, body, context, say }) => {
      await ack();
    });
  },
};
