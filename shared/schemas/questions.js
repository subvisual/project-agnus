QuestionsSchema = new SimpleSchema({
  description: {
    type: String,
    label: 'Description'
  },
  author: {
    type: String,
    label: 'Author',
    optional: true
  }
});

Questions.attachSchema(QuestionsSchema);
