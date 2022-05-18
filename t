display_information:
  name: Skillz-bot
  description: Keep updated about Skillz app
  background_color: "#0000AA"
  long_description: "This bot helps keep your Skillz profile up to date, and facilitates skill completion. If you have any problem or question, you can contact : Hugo Wood, Mai-ly Lehoux, Clément Fassot or Jean-Philippe Baconnais on the Zenika Slack."
features:
  app_home:
    home_tab_enabled: true
    messages_tab_enabled: true
    messages_tab_read_only_enabled: false
  bot_user:
    display_name: Skillz-bot
    always_online: true
  slash_commands:
    - command: /skillz-by-topic
      url: https://slack-bot.skillz.zenika.com/slack/events
      description: Get users names that love a specific topic /bytopic [name] [city]
      should_escape: false
    - command: /skillz-note-skill
      url: https://slack-bot.skillz.zenika.com/slack/events
      description: Note skills of your choice /note [skills name]
      should_escape: false
    - command: /skillz-activate
      url: https://slack-bot.skillz.zenika.com/slack/events
      description: Set your reminder as active. Default -> activate is set as true
      should_escape: false
    - command: /skillz-desactivate
      url: https://slack-bot.skillz.zenika.com/slack/events
      description: Set your reminder as inactive. Default -> activate is set as true
      should_escape: false
    - command: /skillz-reminder-message
      url: https://slack-bot.skillz.zenika.com/slack/events
      description: Get the list of skills that not had been noted trough Skillz app or Skillz bot since 1 month or more
      should_escape: false
    - command: /skillz-version
      url: https://slack-bot.skillz.zenika.com/slack/events
      description: Get actual version of the Skillz bot
      should_escape: false
oauth_config:
  scopes:
    bot:
      - commands
      - chat:write
      - chat:write.public
      - incoming-webhook
      - chat:write.customize
      - reactions:write
      - users:read
      - users:read.email
      - users.profile:read
      - channels:read
      - groups:write
      - mpim:write
      - im:write
settings:
  event_subscriptions:
    request_url: https://slack-bot.skillz.zenika.com/slack/events
    bot_events:
      - app_home_opened
  interactivity:
    is_enabled: true
    request_url: https://slack-bot.skillz.zenika.com/slack/events
  org_deploy_enabled: false
  socket_mode_enabled: false
  token_rotation_enabled: false