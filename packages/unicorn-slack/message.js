SlackMessage = class SlackMessage {
  constructor(target, content) {
    this.text = content;
    this.channel = this.normalizeHandler(target);
    this.username = Meteor.settings.public.slack.username;
  }

  normalizeHandler(handler) {
    if (!handler)
      return handler;

    if (handler[0] !== '@')
      return '@' + handler;
    else
      return handler;
  }

  static formatLink(link, text) {
    return `<${link}|${text}>`;
  }
}
