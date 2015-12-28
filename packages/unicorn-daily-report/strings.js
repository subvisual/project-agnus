DailyReport = DailyReport || {};

DailyReport.messages = {
  sendToAll: () => {
    return 'Hi! I just requested the whole team to submit their reports :smile:';
  },

  fillForm: (username, form) => {
    return `Hey ${username}, you have to:\n
    1. Login Typeform (contact@groupbuddies.com / gbforms)\n
    2. Fill in the ${form}\n
    3. Send feedback, please\n
    Thank you :smile:`;
  }
}

DailyReport.errors = {
  unauthorizedUser: (username) => {
    return `Hey, you wanted to request the team report but I'm afraid that ` +
      `you are ${username} trying to mess with Unicorn.`;
  }
};
