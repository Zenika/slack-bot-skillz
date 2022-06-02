display_information:
  name: Skillz-bot-dev
  description: Keep updated about Skillz app
  background_color: "#0000AA"
features:
  app_home:
    home_tab_enabled: true
    messages_tab_enabled: true
    messages_tab_read_only_enabled: false
  bot_user:
    display_name: Bot-skillz
    always_online: true
  slash_commands:
    - command: /skillz-by-topic_DEV
      url: https://7d37-85-208-216-205.ngrok.io/slack/events
      description: Get users that love a specific topic */bytopic [name] [city]*
      should_escape: false
    - command: /skillz-note-skill_DEV
      url: https://7d37-85-208-216-205.ngrok.io/slack/events
      description: Note skills of your choice */note [skills name]*
      should_escape: false
    - command: /skillz-activate_DEV
      url: https://7d37-85-208-216-205.ngrok.io/slack/events
      description: Set your reminder as active. Default -> activate
      should_escape: false
    - command: /skillz-desactivate_DEV
      url: https://7d37-85-208-216-205.ngrok.io/slack/events
      description: Set your reminder as inactive. Default -> activate
      should_escape: false
    - command: /skillz-reminder-message_DEV
      url: https://7d37-85-208-216-205.ngrok.io/slack/events
      description: Get the list of skills that not had been noted since 1 month
      should_escape: false
    - command: /skillz-version_DEV
      url: https://7d37-85-208-216-205.ngrok.io/slack/events
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
    request_url: https://7d37-85-208-216-205.ngrok.io/slack/events
    bot_events:
      - app_home_opened
  interactivity:
    is_enabled: true
    request_url: https://7d37-85-208-216-205.ngrok.io/slack/events
  org_deploy_enabled: false
  socket_mode_enabled: false
  token_rotation_enabled: false
