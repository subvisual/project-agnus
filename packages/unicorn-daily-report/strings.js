DailyReport = DailyReport || {};

DailyReport.messages = {
  sendToAll: () => {
    return 'Hi! I just requested the whole team to submit their reports :smile:';
  },

  fillForm: (username, form) => {
    return `Hey ${username}!\nPlease fill in this ${form}\nThank you :smile:`;
  }
}

DailyReport.errors = {
  unauthorizedUser: (username) => {
    return `Hey, you wanted to request the team report but I'm afraid that ` +
      `you are ${username} trying to mess with Unicorn.`;
  }
};
