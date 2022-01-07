module.exports = {
  actionsHandler(app) {
    app.action("noteASkill", async ({ ack, body, context, say }) => {
      await ack();
      try {
        const result = await app.client.views.open({
          trigger_id: body.trigger_id,
          token: context.botToken,
          view: {
            type: "modal",
            // View identifier
            callback_id: "view_1",
            title: {
              type: "plain_text",
              text: "Modal title",
            },
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: "Note the _Bash_ skill",
                },
              },
              {
                type: "divider",
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: "Note the _Bash_ skill",
                },
                accessory: {
                  type: "radio_buttons",
                  action_id: "update_view",
                  initial_option: {
                    value: "A1",
                    text: {
                      type: "plain_text",
                      text: "Radio 1",
                    },
                  },
                  options: [
                    {
                      value: "A1",
                      text: {
                        type: "plain_text",
                        text: "Radio 1",
                      },
                    },
                    {
                      value: "A2",
                      text: {
                        type: "plain_text",
                        text: "Radio 2",
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
    app.action("update_view", async ({ ack, body, context, say }) => {
      await ack();
      try {
        const result = await app.client.views.update({
          view_id: body.view.id,
          // Pass the current hash to avoid race conditions
          hash: body.view.hash,
          view: {
            type: "modal",
            // View identifier
            callback_id: "view_1",
            title: {
              type: "plain_text",
              text: "Modal title",
            },
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: "Note the _Bash_ skill",
                },
                accessory: {
                  type: "radio_buttons",
                  action_id: "update_view",
                  initial_option: {
                    value: "A1",
                    text: {
                      type: "plain_text",
                      text: "lfdkjfs",
                    },
                  },
                  options: [
                    {
                      value: "A1",
                      text: {
                        type: "plain_text",
                        text: "lfdkjfs",
                      },
                    },
                    {
                      value: "A2",
                      text: {
                        type: "plain_text",
                        text: "fldjsflksf",
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
  },
};
